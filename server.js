/* jshint node: true, browser: false */
'use strict';

// CREATE HTTP SERVER AND PROXY
const path     = require('path');
const express  = require('express');
const app      = express();
const basePath = path.join('/', process.env.BASE_PATH||'/', '/');

if(!process.env.BASE_PATH) console.error(`WARNING: environment BASE_PATH not set. USING default`);

var httpProxy = require('http-proxy');

app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');

// LOAD CONFIGURATION

app.set('port', process.env.PORT || 8000);
var proxy = httpProxy.createProxyServer({});

// CONFIGURE /APP/* ROUTES

const appRoutes = new express.Router();

appRoutes.use('/app',   require('serve-static')(__dirname + '/app_build'));
appRoutes.use('/app',   require('serve-static')(__dirname + '/app'));
appRoutes.all('/app/*', (req, res) => res.status(404).send());
appRoutes.get('/*',     (req, res) => res.render('template', { baseUrl: basePath }));

// START SERVER

app.use(basePath, appRoutes);

if(basePath!='/') app.use('/', appRoutes); // temps support for transition to Traefik 2 / AWS ALB


app.listen(app.get('port'), function () {
	console.log('Server listening on %j', this.address());
});
