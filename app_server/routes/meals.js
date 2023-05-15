const express = require('express');
const router = express.Router();
const controllerMeals = require('../controllers/meals');

/* GET home page. */
router.get('/', controllerMeals.meals);

module.exports = router;