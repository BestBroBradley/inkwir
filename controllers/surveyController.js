const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Surveys
          .find(req.query)
          .populate("results")
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req,res) {
        db.Surveys
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.Surveys
          .create(req.body)
          .then(({ _id }) => {
            return db.Users.findOneAndUpdate({ _id: req.body.createdBy}, { $push: { createdBy: _id }})
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => console.log(err));
    },
    remove: function(req,res) {
        db.Surveys
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    getResults: function(req,res) {
        db.Surveys
          .findOne({ _id: req.params.id })
          .populate("results")
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  }
};