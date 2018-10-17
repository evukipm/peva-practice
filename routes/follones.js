const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Follon = require('../models/follon');
const Esbirro = require('../models/esbirro');
const Organizacion = require('../models/organización');
const Mafioso = require('../models/mafioso')

router.get('/', (req, res, next) => {
  Follon.find()
  .then(follones => {
    res.render('follones', {follones});
  })
  .catch(error => {
    
  })
})