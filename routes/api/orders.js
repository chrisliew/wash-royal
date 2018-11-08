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

// @route   GET api/order
// @desc    Get Order by id
// @access  Public

router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .sort({ dateOrder: -1 })
    .then(order => res.json(order))
});


// @route   POST api/orders
// @desc    Create A Order
// @access  Public
router.post('/', (req, res) => {
 
  const newOrder = new Order({
    service: req.body.service,
    slots: req.body.slots,
    collectionTime: req.body.collectionTime,
    collectionDate: req.body.collectionDate,
    returnTime: req.body.returnTime,
    returnDate: req.body.returnDate,
    softener: req.body.softener,
    estimatedKG: req.body.estimatedKG,
    ironed: req.body.ironed,
    shoes: req.body.shoes,
    clientName: req.body.clientName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    locationName: req.body.locationName,
    roomNumber: req.body.roomNumber,
    alternativeAddress: req.body.alternativeAddress,
    paymentType: req.body.paymentType,
    status: req.body.status,
    actualKG: req.body.actualKG,
    googleId: req.body.googleId
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


