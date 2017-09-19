const Employees = require('../models/employee');
const BaseClass = require('./baseController');

class EmployeesController extends BaseClass {

  async show() {
    let id = this.request.params.id;
    let employee = await Employees.findById(id);
    this.render(employee);
  }

  async index() {
    let employees = await Employees.find();
    this.render(employees);
  }

  async create() {
    new Employees({
      first_name: this.request.body.first_name,
      family_name: this.request.body.last_name,
      position: this.request.body.position,
      // user: this.request.body.user,
      // holiday_plan: this.request.body.holiday_plan,
    }).save();
    this.render({ message: 'Employee added'});
  }

  async update() {
    let id = this.request.params.id;
    let updatedObject = {
      first_name: this.request.body.first_name,
      family_name: this.request.body.last_name,
      position: this.request.body.position
    };

    await Employees.findByIdAndUpdate(id, updatedObject, {new: true});

    this.render({ message: 'Employee updated!'});
  }

  async delete() {
    let id = this.request.params.id;
    let employee = await Employees.findByIdAndRemove(id);
    this.render({ message: `${employee.name} Employee deleted`});
  }
}

module.exports = EmployeesController;
