var express = require('express');
var router = express.Router();
var usuarioController = require('../controller/usuarioController')

/* GET users listing. */
router.get('/usuario', usuarioController.index);
router.post('/usuario', usuarioController.store);

module.exports = router;
