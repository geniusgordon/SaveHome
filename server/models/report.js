const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  status: {
    type: String,
    enum: ['Wet', 'Drink', 'Sign', 'Blind'],
  },
  lat: Number,
  lng: Number,
  time: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('report', reportSchema);

