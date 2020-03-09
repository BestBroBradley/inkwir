const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Users
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    findById: function(req,res) {
        db.Users
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
      db.Users
      .findOne({username: req.body.username}, function(err, user) {
        if (err) throw err;
        if (user) {
          console.log("user already exists")
          return res.json("user already exists");
        }
        if (!user) {
          let newUser = new db.Users({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age,
            nationality: req.body.nationality,
            gender: req.body.gender
          })
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function(err) {
            if (err) throw err;
            console.log("user saved!");
            res.redirect(307, "/api/users/login")
          });  
        }
      })
    },
    update: function(req,res) {
        db.Surveys
          .create(req.body)
          .then(({ _id}) => {
            return db.Users.findOneAndUpdate({ _id: req.body.createdBy }, { $push: { createdBy: _id }})
          })
          .then((dbModel) => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    getCreator: function(req,res) {
        db.Users
          .findOne({ _id: req.params.id })
          .populate("createdBy")
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req,res) {
        db.Users
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};