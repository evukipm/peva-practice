const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const esbirroSchema = new Schema  ({

});

const Esbirro = mongoose.model('Esbirro', esbirroSchema);

module.exports = Esbirro