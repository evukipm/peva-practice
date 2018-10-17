const mongoose = require('mongoose');
const Mafioso = require('../models/mafioso');
const Esbirro = require('../models/esbirro');
const Organizacion = require('../models/organización');
const Follon = require('../models/follon');

const rellenoMafioso = [
  {
    alias: "Corleano",
    origen: "Sizilia"
  }
]

const rellenoEsbirro = [{}]

const rellenoFollon = [{
  nombre: "Movidote",
  sitio: "Parque de la esquina",
  level: "A muerte",
  descripción: "Hostias en el parque, puedes traer la pipa.",
}]

const rellenoOrganizacion = [{
  name: "Los macarras",
  level: "Cutre",
  origin: "Sizilia",
  catchPhrase: "Dame la cartera",
  description: "Peña chunga del barrio de toda la vida",
  normas: "1: Nunca robes a un colegui",
}]

mongoose.connect('mongodb://localhost/celebritiesdb')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Mafioso.insertMany(rellenoMafioso)
.then(result => {
  console.log('mafios introducido')
})
.catch(error => {
  console.log(error)
})

Esbirro.insertMany(rellenoEsbirro)
.then(result => {
  console.log('mafios introducido')
})
.catch(error => {
  console.log(error)
})

Organizacion.insertMany(rellenoOrganizacion)
.then(result => {
  console.log('mafios introducido')
})
.catch(error => {
  console.log(error)
})

Follon.insertMany(rellenoFollon)
.then(result => {
  console.log('mafios introducido')
  mongoose.connection.close;
})
.catch(error => {
  console.log(error)
})