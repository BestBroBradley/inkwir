const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Surveys
          .find(req.query)
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
            console.log(req.body)
            console.log(_id)
            console.log(req.body.createdBy)
            return db.Users.findOneAndUpdate({ _id: req.body._id}, { $push: { createdBy: _id }})
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
    addResults: function(req,res) {
      db.Results
        .create(req.body)
        .then(dbModel => {
          return db.Surveys.findOneAndUpdate({ _id: req.params.id }, { results: dbModel._id }, { new: true });
        })
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