var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  email: {type: String, require: true},
  password: {type: String, require: true}
});

//Export model
module.exports = mongoose.model('User', UserSchema);
