var express = require('express');
var router = express.Router();

// Require controller module
var employee_controller = require('../controllers/employeeController');

/* GET request for creating a Employee.*/
router.get('/create', employee_controller.employee_create_get);

/* POST request for creating Employee. */
router.post('/create', employee_controller.employee_create_post);

/* GET request to delete Employee. */
router.get('/:id/delete', employee_controller.employee_delete_get);

// POST request to delete Employee
router.post('/:id/delete', employee_controller.employee_delete_post);

/* GET request to update Employee. */
router.get('/:id/update', employee_controller.employee_update_get);

// POST request to update Employee
router.post('/:id/update', employee_controller.employee_update_post);

/* GET request for one Employee. */
router.get('/:id', employee_controller.employee_detail);

/* GET request for list of all Employee items. */
router.get('/', employee_controller.employees_list);

module.exports = router;
