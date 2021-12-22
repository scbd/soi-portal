/* jshint node: true, browser: false */
'use strict';

// CREATE HTTP SERVER AND PROXY
const path     = require('path');
const express  = require('express');
const app      = express();
const basePath = process.env.BASE_PATH ? toBasePath(process.env.BASE_PATH) : null;

if(!process.env.BASE_PATH) console.error(`WARNING: environment BASE_PATH not set. USING 'base_url' http header or '/' as default`);

app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');

// LOAD CONFIGURATION

app.set('port', process.env.PORT || 8000);

// CONFIGURE /APP/* ROUTES

const appRoutes = new express.Router();

appRoutes.use('/app',   require('serve-static')(__dirname + '/app_build'));
appRoutes.use('/app',   require('serve-static')(__dirname + '/app'));
appRoutes.all('/app/*', (req, res) => res.status(404).send());
appRoutes.get('/*',     (req, res) => { 
    const baseUrl = toBasePath(basePath || req.headers.base_url);
    res.render('template', { baseUrl: urlSafe(baseUrl) })
});

// START SERVER

app.use(toBasePath(basePath), appRoutes);

app.listen(app.get('port'), function () {
	console.log('Server listening on %j', this.address());
});

function toBasePath(dir) {
    return path.join('/', dir || '/', '/');
}

function urlSafe(dir) {
    var parts = dir.split('/').map(o=>encodeURIComponent(o));
    return path.join.apply(null, parts.map(o=>o||'/'));
}