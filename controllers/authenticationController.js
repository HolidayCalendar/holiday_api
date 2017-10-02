const BaseClass = require('./baseController');

class AuthenticationController extends BaseClass {

  async signIn() {
    this.render({ message: 'method not implemented'});
  }

  async reset() {
    this.render({ message: 'method not implemented'});
  }
}

module.exports = AuthenticationController;
