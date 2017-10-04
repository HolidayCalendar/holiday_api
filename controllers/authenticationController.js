const JWT = require('jsonwebtoken');
const BaseClass = require('./baseController');
const Employees = require('../models/employee');
const { JWT_SECRET } = require('../config/secret');
const bcrypt = require('bcrypt');
const exp = new Date().setDate(new Date().getDate() + 1);

class AuthenticationController extends BaseClass {

  async signIn() {
    const email = this.request.body.email;
    const password = this.request.body.password;

    const foundEmployee = await Employees.findOne({email: email});

    if (foundEmployee) {
      if (bcrypt.compareSync(password, foundEmployee.password)) {
        let token = JWT.sign({
          auth:  'magic',
          iss: 'Employee',
          agent: this.request.headers['user-agent'],
          sub: foundEmployee.id,
          iat: new Date().getTime(),
          exp: exp
        }, JWT_SECRET);
        this.render({ message: 'token created', token: token});
      } else {
        this.render({ message: 'invalid password'});
        return;
      }
    } else {
      this.render({ message: 'user does not exist'});
    }
  }

  async reset() {
    this.render({ message: 'method not implemented'});
  }

  static signIn(req, res) {
    new this(req, res).signIn();
  }

  static reset(req, res) {
    new this(req, res).reset();
  }
}

module.exports = AuthenticationController;
