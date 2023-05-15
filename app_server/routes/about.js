const express = require('express');
const router = express.Router();
const controllerAbout = require('../controllers/about');

/* GET home page. */
router.get('/', controllerAbout.about);

module.exports = router;