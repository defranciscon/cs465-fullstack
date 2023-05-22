const fs = require('fs');
const articles = JSON.parse(fs.readFileSync('./data/articles.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', { title: pageTitle, articles });
};

module.exports = {
    news
}
