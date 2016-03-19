const express = require('express');
const authenticate = require('./authenticate');
const api = require('./api');

const router = new express.Router();

router.use(authenticate);
router.use('/api', api);
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/report', (req, res) => {
  res.render('gmap');
});

router.get('/warning', (req, res) => {
  res.render('warning');
});

router.get('/percent', (req, res) => {
  res.render('percent');
});

router.get('/d3', (req, res) => {
  res.render('d3');
});
module.exports = router;

