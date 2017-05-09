/*
* Copyright 2017 JJJ
*/

'use strict';

// Imports
let firebase = require('firebase-admin');
let express = require('express');
let Promise = require('promise');

let app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3500');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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
