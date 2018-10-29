const express = require('express');
const router = express.Router();

// Item Model
const Appointment = require('../../models/Appointment');

// @route GET api/appointments
// @desc  GET ALL orders
// @access Public

router.get('/', (req, res) => {
  Appointment.find()
    .sort({ date: 1 })
    .then(appointments => res.json(appointments))
});

module.exports = router;

