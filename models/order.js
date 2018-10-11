const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  service: {
    type: String,
    required: true
  },
  dateOrder: {
    type: Date,
    default: Date.now
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
    required: true
  },
  dateService: {
    type: String,
    required: true
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);

