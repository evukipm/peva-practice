const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const organizacionSchema = new Schema ({
  name: String,
  level: {type: String, enum: ["Cutre", "Ni pa ti ni pa mi", "Tocha"]},
  origin: String,
  catchPhrase: String,
  description: String,
  normas: Array,
});

const Organizacion = mongoose.model("Organizacion", organizacionSchema);

module.exports = Organizacion;

