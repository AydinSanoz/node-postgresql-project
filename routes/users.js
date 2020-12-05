var express = require('express');
var router = express.Router();
var userController = require("../controller/userController")

/* /users GET users listing. */
router.get('/', userController.getUser);

module.exports = router;
