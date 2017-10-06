const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/secret');

class BaseClass {
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

  isAuthenticated() {
    const token = this.request.headers['x-auth-token'];
    if (!token) {
      return false;
    }
    const data = JWT.decode(token);
    if (!data.sub) {
      return false;
    }
    return true;
  }

  currentEmplyee() {

  }

  verify() {
    const token = this.request.headers['x-auth-token'];

    JWT.verify(token, JWT_SECRET, function(err, decoded) {
      if (err) {
        console.log(err);
      }
    });
  }

  static show(req, res) {
    let o = new this(req, res);
    o.verify();
    if (o.isAuthenticated()) {
      return o.show();
    } else {
      return this.error();
    }
  }

  static index(req, res) {
    let o = new this(req, res);
    if (o.isAuthenticated()) {
      return o.index();
    } else {
      return this.error();
    }
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

module.exports = BaseClass;
