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
  slots: {
    type: Number,
    required: true
  },
  collectionTime: {
    type: String,
    required: true
  },
  collectionDate: {
    type: String,
    required: true
  },
  returnTime: {
    type: String,
    required: true
  },
  returnDate: {
    type: String,
    required: true
  },
  estimatedKG: {
    type: Number,
    default: 1 
  },
  ironed: {
    type: Boolean,
    default: false
  },
  shoes: {
    type: Number,
    default: 0
  },
  softener: {
    type: Boolean,
    default: true
  },
  clientName: {
    type: String,
    required: true
  },
  email: {
   type: String,
   required: true 
  },
  phoneNumber: {
    type: String,
    required: false
  },
  locationName: {
    type: String,
    required: false
  },
  roomNumber: {
    type: String,
    required: false
  },
  alternativeAddress: {
    type: String,
    required: false
  },
  paymentType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "In Progress"
  },
  actualKG: {
    type: Number,
    default: 1
  },
  googleId: {
    type: String
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);

