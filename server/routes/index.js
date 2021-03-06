(function () {
    'use strict';

    var routes;

    routes = {
        api: {}
    };

    routes.index = function (req, res, next) {
        res.render('home', {
            angularApp: 'sky-beacons',
            layout: 'main',
            title: 'Sky Beacons'
        });
    };

    routes.api = {
        beacon: require(__dirname + '/api/beacon.js'),
        docent: require(__dirname + '/api/docent.js'),
        exhibit: require(__dirname + '/api/exhibit.js')
    };

    module.exports = routes;
}());
