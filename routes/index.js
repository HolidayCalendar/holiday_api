const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', async function(req, res, next) {
  res.json({
    endpoints: []
  });
});

module.exports = router;
