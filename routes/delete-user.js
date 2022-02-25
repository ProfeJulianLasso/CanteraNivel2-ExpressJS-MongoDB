// Libraries
const express = require('express');
const router = express.Router();

// Models
const User = require('../models/user');

/* Borrar usuario */
router.delete('/:id', function (req, res, next) {

  // User.findByIdAndDelete(req.params.id)
  User.deleteById(req.params.id)
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});

module.exports = router;
