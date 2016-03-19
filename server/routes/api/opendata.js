const express = require('express');
const Opendata = require('../../models/opendata');
const router = new express.Router();

router.get('/', (req, res) => {
  Opendata.find({}).limit(30).exec((err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(data);
  });
});

module.exports = router;

