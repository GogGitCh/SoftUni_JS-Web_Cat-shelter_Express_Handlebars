const express = require('express');
const path = require('path');

function expressCofigurator(app) {
    app.use('/static', express.static(path.join(__dirname, '../public')));
    app.use(express.urlencoded({extended:false}));

}

module.exports = expressCofigurator;