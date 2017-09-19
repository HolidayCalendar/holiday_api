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
};

module.exports = HolidaysLimitController;
