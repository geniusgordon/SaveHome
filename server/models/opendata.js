const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opendataSchema = new Schema({
  lat: Number,
  lng: Number,
  dead: Number,
  injury: Number,
  addr: String,
  time: Date,
  car: Array,
});

module.exports = mongoose.model('opendata', opendataSchema);

