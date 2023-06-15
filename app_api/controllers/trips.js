const mongoose = require('mongoose');       // .set('debug', true) require mongoose to access our database
const Trip = mongoose.model('trips');      // bring in the model for trips

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Trip.find({}).exec((err, trips) => {
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
    Trip.find({ 'code': req.params.tripCode }).exec((err, trip) => {
        if (!trip) {
            return res.status(404).json({"message": "trip not found"});
        } else if (err) {
            return res.status(404).json(err);
        } else {
            return res.status(200).json(trip);
        }
    });
};

const tripsAddTrip = async (req, res) => {
    Trip.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
    (err, trip) => {
        if (err) {
            return res.status(400).json(err); // bad request, invalid content
        } else {
            return res.status(201).json(trip); // created
        }
    });
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Trip
        .findOneAndUpdate({'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObectId') {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            return res.status(500).json(err); // server error
        });
}

const tripsDeleteTrip = async (req, res) => {
    console.log(req.body);
    Trip.
        findOneAndDelete({'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        })
        .then(trip => {
            if (!trip) {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObectId') {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            return res.status(500).json(err); // server error
        });
}

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};