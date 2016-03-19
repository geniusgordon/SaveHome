const express = require('express');
const Report = require('../../models/report');
const router = new express.Router();

router.get('/', (req, res) => {
  Report.find({}, (err, reports) => {
    res.status(200).json({
      reports,
    });
  });
});

router.post('/', (req, res) => {
  if (!req.body.status || !req.body.lat || !req.body.lng) {
    res.status(403).json({
      success: false,
      message: 'Invalid post.',
    });
    return;
  }
  const status = req.body.status;
  const lat = req.body.lat;
  const lng = req.body.lng;
  const report = new Report({
    status, lat, lng
  });
  report.save((err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Save report error.',
      });
      return;
    }
    res.status(200).json({
      success: true,
    });
  });
});

router.get('/percent', (req, res) => {
  Report.count({}, (err, total) => {
    Report.aggregate([{
      $group: {
        _id: '$status',
        count: {
          '$sum': 1,
        },
      },
    }, {
      $project: {
        count: 1,
        percent: {
          $multiply: [{
            $divide: [100, total]
          }, '$count']
        }
      }
    }], (err, reports) => {
      if (err) {
        res.status(500).json({
          err,
        });
      }
      res.status(200).json({
        total,
        reports
      });
    });
  });
});

module.exports = router;

