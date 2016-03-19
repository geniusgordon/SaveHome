const express = require('express');
const authenticate = require('./authenticate');
const api = require('./api');

const router = new express.Router();

router.use(authenticate);
router.use('/api', api);
router.get('/report', (req, res) => {
  res.render('gmap');
});

router.get('/warning', (req, res) => {
  res.render('warning');
});

module.exports = router;

