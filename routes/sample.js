const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Samples = mongoose.model('Samples', {
  first: String,
  number: Number
});

new Samples({first: 'Cos', number: 432}).save();

router.get('/', async function(req, res, next) {
  let samples = await Samples.find();
  res.json(samples);
});

module.exports = router;
