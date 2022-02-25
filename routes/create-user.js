// Libraries
const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Crear nuevo usuario */
router.post('/', function (req, res, next) {

  const user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    genre: req.body.genre
  });

  user.save()
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

module.exports = router;
