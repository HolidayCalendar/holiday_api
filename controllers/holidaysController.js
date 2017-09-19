const HolidayModel = require('../models/holiday');
const BaseClass = require('./baseController');

class HolidaysController extends BaseClass {

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
}

module.exports = HolidaysController;
