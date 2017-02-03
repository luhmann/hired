const express = require('express')
const admin = require('firebase-admin')
const path = require('path')
const router = express.Router()

admin.initializeApp({
  credential: admin.credential.cert(path.resolve(__dirname, '..', 'auth.json')),
  databaseURL: 'https://mobx-time-tracking-cbeca.firebaseio.com'
})


/* GET home page. */
router.get('/auth/:uid', function(req, res, next) {
  return admin.auth().createCustomToken(req.params.uid)
    .then(function(customToken) {
      res.json({ token: customToken })
    })
    .catch(function(error) {
      res.json({ error: true })
    })
})

module.exports = router
