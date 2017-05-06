/**
* Copyright 2017 JJJ
**/

'use strict';

// Imports
let firebase = require('firebase-admin');
let express = require('express');
let Promise = require('promise');
let capitalize = require('./server/modules/capitalize/capitalize.js');

let app = express();

// Initialize
// let serviceAccount = require('./SECRET_acc/serviceAccountKey.json');
// let serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
firebase.initializeApp({
  credential: firebase.credential.cert({
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL
  }),
  databaseURL: "https://housing-98e93.firebaseio.com"
});
let ref = firebase.database().ref('housing/sold');

app.get('/', (req, res) => {
  res.send('try /neighborhood/*yourPreferredNeighborhood*');
});

app.get('/neighborhood/:hood', (req, res) => {
  ref.orderByChild('neighborhood').equalTo(capitalize.capitalizeString(req.params.hood)).on('child_added', (snapshot) => {
    console.log(snapshot.val());
  });
});

app.listen(3000, () => {
  console.log('3000!');
});
