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

module.exports = HolidaysController;
