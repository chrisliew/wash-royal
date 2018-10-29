const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AppointmentSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  slots: {
    type: Number,
    default: 2
  }
})

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);