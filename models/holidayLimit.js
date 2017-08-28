var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HolidayLimitSchema = Schema({
  number_of_holidays: {type: String, required: true, max: 14}
});

//Export model
module.exports = mongoose.model('HolidayLimit', HolidayLimitSchema);
