var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmplyeeSchema = Schema({
  first_name: {type: String, required: true, max: 100},
  family_name: {type: String, required: true, max: 100},
  position: {type: String, required: true, enum: ['Admin', 'Team Leader', 'Employee'], default: 'Employee'},
  user: {type: Schema.Types.ObjectId, ref:'User', required: true},
  holiday_plan: {type: Schema.Types.ObjectId, ref:'Holiday', required: true},
});

EmplyeeSchema
  .virtual('name')
  .get(function() {
    return this.family_name + ', ' + this.first_name;
  });

//Export model
module.exports = mongoose.model('Employee', EmplyeeSchema);
