const express = require('express');
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() })

//Controllers
const ProductController = require('../controllers/ProductController');

//GET
router.get("/homeProducts", ProductController.getAllHomes);
router.get("/starProducts", ProductController.getStaredProduct);

//POST
router.all("/product", upload.single('image'), upload.array('pictures', 12), ProductController.postProduct);

module.exports = router;
