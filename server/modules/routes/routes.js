/*
 * Express routes
*/

'use strict';

let helpers = require('../helpers/helpers.js');

module.exports = (app, SoldDb) => {
  // TODO: Make sure firebase has all required indexes
  app.get('/', (req, res) => {
    res.send('See routes.js for available routes.');
  });

  app.get('/data/snapshot', (req, res) => {
    SoldDb.find({}, function (err, items) {
        res.send(items);
    });
  });

  app.get('/data/neighborhood/:hood', (req, res) => {
    SoldDb.find({'neighborhood':req.params.hood}, function (err, items) {
        res.send(items);
    })
  });

  app.get('/data/postcode/:code', (req, res) => {
    SoldDb.find({'postalcode':req.params.code}, function (err, items) {
        res.send(items);
    })
  });
}
