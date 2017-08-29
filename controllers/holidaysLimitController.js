const HolidayLimitModel = require('../models/holidayLimit');
const BaseClass = require('./baseController');

class HolidaysLimitController extends BaseClass {
  create() {
    this.render({ message: 'method not implemented'});
  }

  update() {
    this.render({ message: 'method not implemented'});
  }

  delete() {
    this.render({ message: 'method not implemented'});
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
};

module.exports = HolidaysLimitController;
