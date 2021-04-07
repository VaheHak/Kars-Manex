const express = require('express');
const router = express.Router();

// Controllers
const AdminController = require('../controllers/Login/AdminController');

//GET
router.get('/adminProfile', AdminController.profile);

//POST
router.post('/adminRegister', AdminController.register);
router.post('/adminLogin', AdminController.login);

module.exports = router;
