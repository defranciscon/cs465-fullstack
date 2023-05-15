const express = require('express');
const router = express.Router();
const controllerContact = require('../controllers/contact');

/* GET home page. */
router.get('/', controllerContact.contact);

module.exports = router;