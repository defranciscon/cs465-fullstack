const express = require('express');
const router = express.Router();
const controllerTravel = require('../controllers/travel');

/* GET home page. */
router.get('/', controllerTravel.travel);

module.exports = router;

