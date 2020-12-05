var express = require('express');
var router = express.Router();
var indexController = require("../controller/indexController")

/* GET home page. */
router.get('/', indexController.getIndex);

module.exports = router;
