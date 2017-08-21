const db = require('../config/db');
const Schema = db.Schema;

const sampleSchema = new Schema({
  first: String,
  number: Number
});

const Samples = db.model('Samples', sampleSchema);

module.exports = Samples;
