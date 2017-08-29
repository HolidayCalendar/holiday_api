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
}

module.exports = BaseClass;
