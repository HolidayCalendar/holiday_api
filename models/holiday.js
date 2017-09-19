var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HolidaySchema = Schema({
  employee: {type: Schema.ObjectId, ref: 'Employee', required: true},
  time_from: Date,
  time_to: Date,
  status: {type: String, required: true, enum: ['Available', 'Booked', 'Used'], default: 'Available'},
  number_of_holidays: {type: Schema.Types.ObjectId, ref:'HolidayLimit'}
});

//Export model
module.exports = mongoose.model('Holiday', HolidaySchema);
