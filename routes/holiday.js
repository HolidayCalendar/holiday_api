var express = require('express');
var router = express.Router();

// Require controller module
var holiday_controller = require('../controllers/holidayController');

/* GET request for creating a Holiday.*/
router.get('/create', holiday_controller.holiday_create_get);

/* POST request for creating Holiday. */
router.post('/create', holiday_controller.holiday_create_post);

/* GET request to delete Holiday. */
router.get('/:id/delete', holiday_controller.holiday_delete_get);

// POST request to delete Holiday.
router.post('/:id/delete', holiday_controller.holiday_delete_post);

/* GET request to update Holiday. */
router.get('/:id/update', holiday_controller.holiday_update_get);

// POST request to update Holiday.
router.post('/:id/update', holiday_controller.holiday_update_post);

/* GET request for one Holiday. */
router.get('/:id', holiday_controller.holiday_detail);

/* GET request for list of all Holiday items. */
router.get('/', holiday_controller.holidays_list);

module.exports = router;
