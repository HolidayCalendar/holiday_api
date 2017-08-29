const express = require('express');
const router = express.Router();

const HolidaysController = require('../controllers/holidaysController');

router.post('', HolidaysController.create.bind(HolidaysController));
router.delete('/:id', HolidaysController.delete.bind(HolidaysController));
router.put('/:id', HolidaysController.update.bind(HolidaysController));
router.get('/:id', HolidaysController.show.bind(HolidaysController));
router.get('', HolidaysController.index.bind(HolidaysController));

module.exports = router;
