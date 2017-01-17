const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(path.resolve(__dirname, '..', 'auth.json')),
  databaseURL: 'https://mobx-time-tracking-cbeca.firebaseio.com'
});

const uid = 'me';

/* GET home page. */
router.get('/auth', function(req, res, next) {
  admin.auth().createCustomToken(uid)
    .then(function(customToken) {
      res.json({ token: customToken });
      next();
    })
    .catch(function(error) {
      res.json({ error: true })
      next();
    });
});

module.exports = router;
