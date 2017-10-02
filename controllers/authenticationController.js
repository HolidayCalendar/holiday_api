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

    Employees.findOne({'email': email}, function(err, user){
        if(err) {
          console.log(err);
        }
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            let token = JWT.sign({
              iss: 'Employee',
              sub: user.id,
              iat: new Date().getTime(),
              exp: exp
            }, JWT_SECRET);
            console.log(token);
            this.render({ message: 'token created'});
          } else {
            return;
          }
        } else {
          this.render({ message: 'user does not exist'});
        }
    });
  }

  async reset() {
    this.render({ message: 'method not implemented'});
  }
}

module.exports = AuthenticationController;
