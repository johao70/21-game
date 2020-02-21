const { Router } = require('express');

const router = Router();
const Fabrica = require('../models/FabricaModel');
const construir = new Fabrica();

router.get('/crear', (req, res) => {
  res.json(construir.crear())
})

router.get('/mezclar', (req, res) => {
  res.json(construir.mezclar())
})

router.get('/pedir', (req, res) => {
  res.json(construir.pedir())
})

module.exports = router;
