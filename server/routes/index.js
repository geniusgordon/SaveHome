const express = require('express');
const authenticate = require('./authenticate');
const api = require('./api');

const router = new express.Router();

router.use(authenticate);
router.use('/api', api);
router.get('/', (req, res) => {
  res.render('gmap');
});

module.exports = router;

