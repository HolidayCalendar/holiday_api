const express = require('express');
const router = express.Router();

const EmployeesController = require('../controllers/employeesController');

router.post('', EmployeesController.create.bind(EmployeesController));
router.delete('/:id', EmployeesController.delete.bind(EmployeesController));
router.put('/:id', EmployeesController.update.bind(EmployeesController));
router.get('/:id', EmployeesController.show.bind(EmployeesController));
router.get('', EmployeesController.index.bind(EmployeesController));

module.exports = router;
