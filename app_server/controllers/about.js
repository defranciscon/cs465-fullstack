const fs = require('fs');
const aboutcontents = JSON.parse(fs.readFileSync('./data/aboutcontents.json', 'utf8'));

/* GET abouts view */
const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';
    res.render('about', { title: pageTitle, aboutcontents});
};

module.exports = {
    about
}
