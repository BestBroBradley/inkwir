const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Results
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req,res) {
        db.Results
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.Results
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    updateResults: function(req,res) {
      console.log(req.body.results)
      console.log(req.params.id)
      db.Results
        .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
};