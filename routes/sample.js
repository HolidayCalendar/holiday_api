const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

class User {
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

  index() {
    this.render(this.params);
  }

  create() {
    this.params
  }

  update() {

  }

  destroy() {

  }
}

router.get('/', function(req, res) {
  new User(req, res).index();
});
router.post('/', function(req, res) {
  new User(req, res).create();
});
router.put('/:id', function(req, res) {
  new User(req, res).update();
});
router.delete('/:id', function(req, res) {
  new User(req, res).destroy();
});

module.exports = router;
