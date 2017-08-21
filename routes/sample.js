const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Samples = require('../models/sample');

new Samples({first: 'Cos', number: 432}).save();

router.get('/', async function(req, res, next) {
  let samples = await Samples.find();
  res.json(samples);
});

module.exports = router;
