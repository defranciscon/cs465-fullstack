const express = require('express');
const router = express.Router();
const controllerNews = require('../controllers/news');

/* GET home page. */
router.get('/', controllerNews.news);

module.exports = router;