"use strict";
var express = require('express');
var expressEjsLayouts = require('express-ejs-layouts');
var PagesController = require('./Controllers/PagesController.js');
var pagesController = new PagesController();
var app = express();
var port = parseInt(process.env.PORT) || 3000;
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('layout', './shared/layout');
app.set('view engine', 'ejs');
app.get('/', pagesController.index);
app.get('/Skills&Traits', pagesController.skills);
app.get('/SiteFeatures', pagesController.siteFeatures);
app.get('/ContactInfo', pagesController.contact);
app.listen(port, '192.168.100.5' | 'localhost', function () { return console.log("Now Listening To Port:".concat(port)); });
module.exports = app;