var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmplyeeSchema = Schema({
  first_name: {type: String, required: true, max: 100},
  family_name: {type: String, required: true, max: 100},
  position: {type: String, required: true, enum: ['Admin', 'Team Leader', 'Employee'], default: 'Employee'},
  email: {type: String, require: true},
  password: {type: String, require: true}
});

EmplyeeSchema
  .virtual('name')
  .get(function() {
    return this.family_name + ', ' + this.first_name;
  });

//Export model
module.exports = mongoose.model('Employee', EmplyeeSchema);
