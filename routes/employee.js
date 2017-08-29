var express = require('express');
var router = express.Router();

// Require controller module
var EmployeesController = require('../controllers/employeeController');

/* GET request for creating a Employee.*/
// router.get('/create', employee_controller.employee_create_get);

/* POST request for creating Employee. */
router.post('/create', EmployeesController.create);

/* GET request to delete Employee. */
// router.get('/:id/delete', employee_controller.employee_delete_get);

// POST request to delete Employee
router.post('/:id/delete', EmployeesController.delete);

/* GET request to update Employee. */
// router.get('/:id/update', employee_controller.employee_update_get);

// POST request to update Employee
router.post('/:id/update', EmployeesController.update);

/* GET request for one Employee. */
router.get('/:id', EmployeesController.show);

/* GET request for list of all Employee items. */
router.get('/', EmployeesController.index);

module.exports = router;
