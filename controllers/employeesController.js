const Employees = require('../models/employee');
const BaseClass = require('./baseController');
const bcrypt = require('bcrypt');

class EmployeesController extends BaseClass {

  async show() {
    let id = this.request.params.id;
    let employee = await Employees.findById(id);
    this.render(employee);
  }

  async index() {
    this.isAuthenticated();
    let employees = await Employees.find();
    this.render(employees);
  }

  async create() {
    const salt = await bcrypt.genSalt(10);
    const password = this.request.body.password;
    const passwordHash = await bcrypt.hash(password, salt);

    new Employees({
      first_name: this.request.body.first_name,
      family_name: this.request.body.family_name,
      position: this.request.body.position,
      email: this.request.body.email,
      password: passwordHash
    }).save();

    this.render({ message: 'Employee added'});
  }

  async update() {
    let id = this.request.params.id;
    let updatedObject = {
      first_name: this.request.body.first_name,
      family_name: this.request.body.family_name,
      position: this.request.body.position,
      email: this.request.body.email,
      password: this.request.body.password
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
