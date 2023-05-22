const fs = require('fs');
const mainad = JSON.parse(fs.readFileSync('./data/mainad.json', 'utf8'));

/* GET homepage */
function index(req, res) {
    pageTitle = process.env.npm_package_description + ' - Home';
    res.render('index', { title: pageTitle, mainad });
};

module.exports = {
    index
}

