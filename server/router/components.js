const express = require('express');
const router = express.Router();

//Controllers
const HeaderMenuController = require('../controllers/HeaderMenuController');
const ConverterController = require('../controllers/ConverterController');

//GET
router.get("/headerMenu", HeaderMenuController.index);
router.get("/currency", ConverterController.index);

//POST

module.exports = router;