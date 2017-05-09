/*
 * Express routes
*/

'use strict';

let helpers = require('../helpers/helpers.js');

module.exports = (app, ref) => {
  // TODO: Make sure firebase has all required indexes
  app.get('/', (req, res) => {
    res.send('try /data/snapshot for full snapshot (slow) OR /neighborhood/*yourPreferredNeighborhood* for neighborhood specific data (see node log)');
  });

  app.get('/data/snapshot', (req, res) => {
    ref.once('value', (snapshot) => {
      res.send(snapshot.val());
    });
  });

  // TODO: Handle firebase data with promises to send all as response
  // No res sent yet
  app.get('/data/neighborhood/:hood', (req, res) => {
    ref.orderByChild('neighborhood').equalTo(helpers.capitalizeString(req.params.hood)).once('value').then(function(snapshot) {
      res.send(snapshot.val())
    });
  });

  app.get('/data/postcode/:code', (req, res) => {
    ref.orderByChild('postalcode').equalTo(helpers.capitalizeString(req.params.code)).once('value').then(function(snapshot) {
      res.send(snapshot.val())
    });
  });
}
