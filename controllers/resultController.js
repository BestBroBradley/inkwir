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
    remove: function(req,res) {
        db.Results
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    addResults: function(req,res) {
        db.Results
          .create(req.body)
          .then(dbModel => {
            return db.Surveys.findOneAndUpdate({ _id: req.params.id }, { review: dbModel._id }, { new: true });
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};