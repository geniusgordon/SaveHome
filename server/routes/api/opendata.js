const express = require('express');
const Opendata = require('../../models/opendata');
const router = new express.Router();

router.get('/', (req, res) => {
  const lat = parseFloat(req.query.lat) || 25.0477553;
  const lng = parseFloat(req.query.lng) || 121.5148712;
  const latDelta = parseFloat(req.query.latDelta) || 0.001;
  const lngDelta = parseFloat(req.query.lngDelta) || 0.01;
  Opendata.find({
    lat: {
      $gte: lat - latDelta,
      $lte: lat + latDelta,
    },
    lng: {
      $gte: lng - lngDelta,
      $lte: lng + lngDelta,
    },
  }).exec((err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json({
      count: data.length,
      data,
    });
  });
});

module.exports = router;

