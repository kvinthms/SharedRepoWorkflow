var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
    //connect to database
    mongoose.connect(config.db.uri);

    //initialize app
    var app = express();

    //enable request logging for development debugging
    app.use(morgan('dev'));

    //body parsing middleware
    app.use(bodyParser.json());

    let _dirname = 'bootcampassignment-4-expressjs-kvinthms';
        app.use('/', express.static(_dirname + '/../../client'));
    //app.use(express.static('/'));
    //or
    //app.use(express.static(path));
    /**TODO
     Serve static files */

    app.use('/api/listings', listingsRouter);
    /**TODO
     Use the listings router for requests to the api */

    app.all('*/', function (req, res) {
        res.sendFile(path.resolve('client/index.html'));
    });
    /**TODO
     Go to homepage for all routes not specified */

    return app;
};  