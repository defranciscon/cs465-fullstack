const express = require('express');
const router = express.Router();
const controllerTravel = require('../controllers/travel');

/* GET home page. */
router.get('/', controllerTravel.travelList);

module.exports = router;

