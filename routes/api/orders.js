const express = require('express');
const router = express.Router();

// Item Model
const Order = require('../../models/Order');

// @route   GET api/orders
// @desc    Get All Orders
// @access  Public
// / represents api/orders since it is in router file..
router.get('/', (req, res) => {
  Order.find()
    .sort({ dateOrder: -1 })
    .then(orders => res.json(orders))
});

// @route   POST api/orders
// @desc    Create A Order
// @access  Public
router.post('/', (req, res) => {
  const newOrder = new Order({
    service: req.body.service,
    time: req.body.time,
    type: req.body.type,
    slots: req.body.slots,
    dateService: req.body.dateService
  });

  newOrder.save().then(order => res.json(order));
});

// @route   DELETE api/orders
// @desc    Delete A Order
// @access  Public

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => order.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;


