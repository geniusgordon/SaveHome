const express = require('express');
const User = require('../../models/user');
const report = require('./report');
const opendata = require('./opendata');
const router = new express.Router();

router.use('/report', report);
router.use('/opendata', opendata);

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.status(200).json(users);
  });
});

module.exports = router;

