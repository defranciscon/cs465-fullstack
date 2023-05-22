const fs = require('fs');
const contactinfo = JSON.parse(fs.readFileSync('./data/contactinfo.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Contact';
    res.render('contact', { title: pageTitle, contactinfo });
};

module.exports = {
    contact
};