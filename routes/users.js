const { Router } = require('express');
var express = require('express');
var router = express.Router();
var userController = require("../controller/userController")

/* /users GET users listing. */
router.get('/', userController.getUser);
router.get('/add', userController.show_add_user_form)
router.post('/add', userController.add_user)
router.get('/:id/delete', userController.delete_user)

module.exports = router;
