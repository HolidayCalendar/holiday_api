const express = require('express');
const router = express.Router();

const HolidaysLimitController = require('../controllers/holidaysLimitController');

router.post('', HolidaysLimitController.create.bind(HolidaysLimitController));
router.delete('/:id', HolidaysLimitController.delete.bind(HolidaysLimitController));
router.put('/:id', HolidaysLimitController.update.bind(HolidaysLimitController));

module.exports = router;
