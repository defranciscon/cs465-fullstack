const fs = require('fs');
const suites = JSON.parse(fs.readFileSync('./data/suites.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', { title: pageTitle, suites});
};

module.exports = {
    rooms
}