var express = require('express');
var router = express.Router();

// Require controller module
var holidayLimit_controller = require('../controllers/holidayLimitController');

/* GET request for creating a Holiday Limit.*/
router.get('/create', holidayLimit_controller.holidayLimit_create_get);

/* POST request for creating Holiday Limit. */
router.post('/create', holidayLimit_controller.holidayLimit_create_post);

/* GET request to delete Holiday Limit. */
router.get('/delete', holidayLimit_controller.holidayLimit_delete_get);

// POST request to delete Holiday Limit.
router.post('/delete', holidayLimit_controller.holidayLimit_delete_post);

/* GET request to update Holiday Limit. */
router.get('/update', holidayLimit_controller.holidayLimit_update_get);

// POST request to update Holiday Limit.
router.post('/update', holidayLimit_controller.holidayLimit_update_post);

module.exports = router;
