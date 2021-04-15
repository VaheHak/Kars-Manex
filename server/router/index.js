const express = require('express');
const router = express.Router();

const users = require('./user')
const admin = require('./admin')
const components = require('./components')
const categories = require('./categories')
const product = require('./product')

router.use('/', users);
router.use('/', admin);
router.use('/', components);
router.use('/', categories);
router.use('/', product);


module .exports = router;
