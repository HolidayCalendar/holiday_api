const express = require('express');
const router = express.Router();

const AuthenticationController = require('../controllers/authenticationController');

router.post('', AuthenticationController.signIn.bind(AuthenticationController));
router.post('/reset', AuthenticationController.reset.bind(AuthenticationController));

module.exports = router;
