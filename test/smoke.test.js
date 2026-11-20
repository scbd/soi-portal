'use strict';

// Smoke tests: start the real server and check it serves the SPA shell and static assets.
const { test, before, after } = require('node:test');
const assert   = require('node:assert/strict');
const { spawn } = require('node:child_process');
const net      = require('node:net');
const path     = require('node:path');
const pkg      = require('../package.json');

const BASE_PATH = '/soi/';

let server;
let baseUrl;
let logs = '';

const pageRoutes = [
    '',
    'about',
    'about/approach',
    'about/history',
    'about/strategic-plan',
    'events',
    'training',
    'training/soi-training-modules',
    'resources',
    'resources/brochures',
    'partners',
    'aligned-initiatives',
    'help/404',
];

const staticAssets = [
    'app/boot.js',
    'app/routes.js',
    'app/template.js',
    'app/css/default.css',
    'app/images/soi-logo.png',
    'app/views/about/index.html',
    'app/libs/requirejs/require.js',
    'app/libs/angular/angular.min.js',
    'app/libs/bootstrap/dist/css/bootstrap.min.css',
];

function getFreePort() {
    return new Promise((resolve, reject) => {
        const srv = net.createServer();
        srv.on('error', reject);
        srv.listen(0, () => {
            const { port } = srv.address();
            srv.close(() => resolve(port));
        });
    });
}

/**
 * Returns true when `version` (e.g. "v24.22.1") satisfies a range made of
 * `^x.y.z` and `>=x.y.z` clauses joined by `||`.
 */
function satisfies(version, range) {
    const toParts = (v) => v.replace(/^v/, '').split('.').map(Number);
    const compare = (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    const current = toParts(version);

    return range.split('||').map((o) => o.trim()).some((clause) => {
        if (clause.startsWith('>=')) return compare(current, toParts(clause.slice(2))) >= 0;
        if (clause.startsWith('^')) {
            const min = toParts(clause.slice(1));
            return current[0] === min[0] && compare(current, min) >= 0;
        }
        throw new Error(`Unsupported range clause: ${clause}`);
    });
}

before(async () => {
    const port = await getFreePort();
    baseUrl = `http://127.0.0.1:${port}${BASE_PATH}`;

    server = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], {
        env: { ...process.env, PORT: String(port), BASE_PATH },
        stdio: ['ignore', 'pipe', 'pipe'],
    });
    server.stdout.on('data', (d) => { logs += d; });
    server.stderr.on('data', (d) => { logs += d; });

    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Server did not start:\n${logs}`)), 10000);
        server.on('exit', (code) => reject(new Error(`Server exited (${code}):\n${logs}`)));
        server.stdout.on('data', () => {
            if (logs.includes('Server listening')) { clearTimeout(timer); resolve(); }
        });
    });
});

after(() => {
    if (server) server.kill();
});

test('node version satisfies package.json engines', () => {
    assert.ok(pkg.engines && pkg.engines.node, 'engines.node is set');
    assert.ok(satisfies(process.version, pkg.engines.node),
        `${process.version} does not satisfy ${pkg.engines.node}`);
});

for (const route of pageRoutes) {
    test(`GET ${BASE_PATH}${route} renders the page shell`, async () => {
        const res  = await fetch(baseUrl + route);
        const body = await res.text();

        assert.equal(res.status, 200);
        assert.match(res.headers.get('content-type'), /text\/html/);
        assert.match(body, /<title>Sustainable Ocean Initiative<\/title>/);
        assert.ok(body.includes(`<base href="${BASE_PATH}">`), 'base href uses BASE_PATH');
        assert.ok(body.includes('app/libs/requirejs/require.js'), 'loads RequireJS');
    });
}

for (const asset of staticAssets) {
    test(`GET ${BASE_PATH}${asset} serves the static asset`, async () => {
        const res = await fetch(baseUrl + asset);
        const buf = Buffer.from(await res.arrayBuffer());

        assert.equal(res.status, 200);
        assert.ok(buf.length > 0, 'non-empty body');
    });
}

test('unknown /app/* asset returns 404', async () => {
    const res = await fetch(baseUrl + 'app/does-not-exist.js');
    assert.equal(res.status, 404);
});

test('server log is clean', () => {
    assert.doesNotMatch(logs, /warn|error|deprecat/i, `unexpected log output:\n${logs}`);
});
