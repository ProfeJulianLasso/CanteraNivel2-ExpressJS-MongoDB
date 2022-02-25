// Libraries
const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Listar todos los usuarios */
router.get('/', function (req, res, next) {

  const data = User.find({
    $or: [
      { 'deleted': { $eq: false } },
      { 'deleted': { $exists: false } },
    ]
  });
  data.then(result => res.json(result)).catch(err => console.error(err));

});

module.exports = router;
