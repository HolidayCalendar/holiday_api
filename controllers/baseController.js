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

module.exports = BaseClass;
