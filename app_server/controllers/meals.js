const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', { title: pageTitle, food});
};

module.exports = {
    meals
}