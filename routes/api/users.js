const router = require("express").Router();
const passport = require("../../config/passport")
const db = require ("../../models")
const UsersController = require("../../controllers/usersController");
const authMiddleware = require("../../config/middleware/isAuthenticated");
const bcrypt = require("bcryptjs")

const generateHash = ((password) => bcrypt.hashSync = (password, bcrypt.genSaltSync(10)))
const validPassword = ((password, encrypted) => bcrypt.compareSync(password, encrypted))

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/users/unauthorized",
  failureFlash: true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/signup", function (req, res, next) {
  db.Users.findOne({ username: req.body.username }, function (err, user) {
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
      newUser.save(function (err) {
        if (err) throw err;
        console.log("user saved!");
        res.redirect(307, "/api/users/login")
      });
    }
  })
});

router.get("/unauthorized", function (req, res, next) {

  let message = req.flash("error")[0]

  setTimeout(function () {
    res.json({
      message: message,
      loggedIn: false
    });
  }, 100);
});

router.get("/profile", authMiddleware.isLoggedIn, function (req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function (req, res, next) {
  res.json("User logged out successfully");
});

// My Stuff

router.put("/user/:id", authMiddleware.isLoggedIn, function (req, res, next) {
  db.Users.findOne({ _id: req.params.id }, function (err, user) {
    if (err) throw err;
    if (!user) {
      console.log("User doesn't exist.")
      return res.json("User doesn't exist.");
    }
    if (bcrypt.compareSync(req.body.oldpassword, user.password)) {
      console.log(bcrypt.compareSync(req.body.oldpassword, user.password))
      console.log("Passwords don't match.")
      return res.json("Passwords don't match.")
    }
    if (!bcrypt.compareSync(req.body.oldpassword, user.password)) {
      console.log("Passwords match")
      db.Users.findByIdAndUpdate(req.params.id),
      { username: req.body.username,
        password: generateHash(req.body.password),
        email: req.body.email,
        age: req.body.age,
        nationality: req.body.nationality,
        gender: req.body.gender},
        ((user) => {
        if (err) throw err;
        console.log(user)
        console.log("user saved!");
        res.json(user)
      })
    }
  })
})
// Nicks's stuff


router.get("/user", authMiddleware.isLoggedIn, function(req, res, next) {
  db.Users.findByIdAndUpdate(req.user._id).populate('todos').then((user) => {
    res.json(user);
  }).catch((err) => {
    res.json(err);
  });
});

router
  .route("/")
  .get(UsersController.findAll)
  .post(UsersController.create)

router
  .route("/:id")
  .get(UsersController.getCreator)
  .put(UsersController.update)
  .delete(UsersController.remove)


module.exports = router;