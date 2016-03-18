const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  status: {
    type: String,
    enum: ['Wet', 'Drink', 'Sign', 'Blind'],
  },
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model('report', reportSchema);

