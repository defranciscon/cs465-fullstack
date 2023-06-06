const mongoose = require('mongoose');       // .set('debug', true) require mongoose to access our database
const model = mongoose.model('trips');      // bring in the model for trips

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    model.find({}).exec((err, trips) => {
        if (!trips) {
            return res.status(404).json({"message": "trips not found"});
        } else if (err) {
            return res.status(404).json(err);
        } else {
            return res.status(200).json(trips);
        }
    });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    model.find({ 'code': req.params.tripCode }).exec((err, trip) => {
        if (!trip) {
            return res.status(404).json({"message": "trip not found"});
        } else if (err) {
            return res.status(404).json(err);
        } else {
            return res.status(200).json(trip);
        }
    });
};

module.exports = {
    tripsList,
    tripsFindCode
};