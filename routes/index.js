const express = require('express');
const router = express.Router();

/* GET index */
router.get('/', function (req, res, next) {
  dato = {
    message: 'Hola Mundo desde una API Rest',
  };
  res.json(dato);
});

module.exports = router;
