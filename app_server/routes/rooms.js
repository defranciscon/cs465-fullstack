const express = require('express');
const router = express.Router();
const controllerRooms = require('../controllers/rooms');

/* GET home page. */
router.get('/', controllerRooms.rooms);

module.exports = router;