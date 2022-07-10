//create user router
const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.view);



module.exports = router;