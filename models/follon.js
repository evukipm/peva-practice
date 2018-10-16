const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const follonSchema = new Schema({
    nombre: String,
    fecha: Date,
    hora: Date,
    sitio: String,
    level: {type: String, enum: ["A muerte", "A cuchillo", "Solo puños", "Insultos"]},
    descripción: String,
    bandos: [{
      type: ObjectId,
      ref: 'Organizacion',      
    }],
    folloneros: [{
      type: ObjectId,
      ref: 'Esbirro',
    }]
  })

const Follon = mongoose.model('Follon', follonSchema);

module.exports = Follon