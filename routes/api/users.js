const router = require("express").Router();
const passport = require("../../config/passport")
const db = require ("../../models")
const authMiddleware = require("../../config/middleware/isAuthenticated");
const bcrypt = require ("bcryptjs")

const generateHash = ((password) => bcrypt.hashSync = (password, bcrypt.genSaltSync(10)))
const validPassword = ((password, encrypted) => bcrypt.compareSync(password, encrypted))

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/users/unauthorized",
  failureFlash : true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/signup", function(req, res, next) {
  db.Users.findOne({username: req.body.username}, function(err, user) {
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
});

router.get("/unauthorized", function(req, res, next) {

  let message = req.flash("error")[0]
  
  setTimeout(function() {
    res.json({
      message: message,
      loggedIn: false
    });
  }, 100);
});

router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  res.json("User logged out successfully");
});

router.put("/user/:id", authMiddleware.isLoggedIn, function(req, res, next) {
  db.Users.findOne({_id: req.params.id}, function(err, user) {
    if (err) throw err;
    if (!user) {
      console.log("User doesn't exist.")
      return res.json("User doesn't exist.");
    }
    if (user && !bcrypt.compareSync(req.body.oldpassword, user.password)) {
      console.log(`Current PW: ${user.password}`)
      console.log(`User input PW: ${generateHash(req.body.oldpassword)}`)
      console.log(bcrypt.compareSync(req.body.oldpassword, user.password))
      console.log("Passwords don't match.")
      return res.json("Passwords don't match.")
    }
    if (user && bcrypt.compareSync(req.body.oldpassword, user.password)) {
      console.log("Passwords match")
      console.log(bcrypt.compareSync(req.body.oldpassword, user.password))
      console.log(req.body.oldpassword, user.password)      
      db.Users.findByIdAndUpdate(req.body._id), {}.populate('todos').then((user) => {
        res.json(user);
      }).catch((err) => {
        res.json(err);
      });

    }
      })
      // newUser.password = newUser.generateHash(req.body.password);
      // newUser.save(function(err) {
      //   if (err) throw err;
      //   console.log("user saved!");
      //   res.redirect(307, "/api/users/login")
      // });  
    })

// Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options, callback)

module.exports = router;