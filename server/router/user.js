const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() })

// Controllers
const UsersController = require('../controllers/Login/UsersController');

//GET
router.get('/profile', UsersController.profile);

//POST
router.post('/register',upload.single('avatar'), UsersController.register);
router.post('/login', UsersController.login);

module.exports = router;
