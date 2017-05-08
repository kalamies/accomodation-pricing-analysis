/*
* Copyright 2017 JJJ
*/

'use strict';

// Imports
let firebase = require('firebase-admin');
let express = require('express');
let Promise = require('promise');

let app = express();

// ENV
let env = process.env.NODE_ENV || 'dev';

if (env === 'dev') require('dotenv').load();

// Initialize Firebase
firebase.initializeApp({
  credential: firebase.credential.cert({
    'private_key': process.env.FIREBASE_PRIVATE_KEY,
    'client_email': process.env.FIREBASE_CLIENT_EMAIL
  }),
  databaseURL: "https://housing-98e93.firebaseio.com"
});
let ref = firebase.database().ref('housing/sold');

// Routes
require('./server/modules/routes/routes.js')(app, ref);

app.listen(3000, () => {
  console.log('localhost:3000!');
});
