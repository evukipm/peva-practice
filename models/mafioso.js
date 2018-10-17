const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const mafiasSchema = new Schema ({
    alias: String,
    origen: String,
    organizacion: [{
      type: ObjectId,
      ref: 'Organizacion'
    }]
})

const Mafioso = mongoose.model('Mafioso', mafiasSchema);

module.exports = Mafioso;