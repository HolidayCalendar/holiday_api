var EmployeeModel = require('../models/employee');

class Employee {
  constructor(req, res) {
    this.request = req;
    this.response = res;
  }

  get params() {
    return Object.extend({}, this.request.query);
  }

  render(data) {
    this.response.json(data);
  }

  show() {
    this.render({message: 'method not implemented'});
  }

  index() {
    this.render({ message: 'method not implemented'});
  }

  create() {
    this.render({ message: 'method not implemented'});
  }

  update() {
    this.render({ message: 'method not implemented'});
  }

  delete() {
    this.render({ message: 'method not implemented'});
  }

  static show(req, res) {
    new this(req, res).show();
  }

  static index(req, res) {
    new this(req, res).index();
  }

  static create(req, res) {
    new this(req, res).create();
  }

  static update(req, res) {
    new this(req, res).update();
  }

  static delete(req, res) {
    new this(req, res).delete();
  }
}

module.exports = Employee

// // Display list of all Employees
// exports.employees_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Employees list');
// };
//
// // Display detail page for a specific Employee
// exports.employee_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
// };
//
// // Display Employee create form on GET
// exports.employee_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Emplyee create GET');
// };
//
// // Handle Emplyee create on POST
// exports.employee_create_post = function(req, res) {
//     new User(req, res).create();
// };
//
// // Display Emplyee delete form on GET
// exports.employee_delete_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Emplyee delete GET');
// };
//
// // Handle Emplyee delete on POST
// exports.employee_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Emplyee delete POST');
// };
//
// // Display Emplyee update form on GET
// exports.employee_update_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Emplyee update GET');
// };
//
// // Handle Emplyee update on POST
// exports.employee_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Emplyee update POST');
// };
