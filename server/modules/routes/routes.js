/*
 * Express routes
*/

'use strict';

let helpers = require('../helpers/helpers.js');

var postinumerot = require('datasets-fi-postalcodes');

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

  // query postcodes
  app.get('/postcodes', (req, res) => {
    const q = req.query.q && req.query.q.trim().toLowerCase()

    const result = []

    if(q && q.length >= 3) {
      Object.keys(postinumerot).forEach((postcode) => {      
        const name = postinumerot[postcode].toLowerCase()
        
        if(postcode.includes(q) || name.includes(q)) {
          result.push({
            postcode,
            name: name[0].toUpperCase() + name.slice(1),  // capitalize first letter
          })
        }
      })
    }
    
    res.send(result);
  })
}
