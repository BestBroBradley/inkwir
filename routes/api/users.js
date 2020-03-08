const router = require("express").Router();
const passport = require("../../config/passport")
const db = require ("../../models")
const UsersController = require("../../controllers/usersController");
const authMiddleware = require("../../config/middleware/isAuthenticated");

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

// router.post("/signup", function(req, res, next) {

// });

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

// router.get("/user", authMiddleware.isLoggedIn, function(req, res, next) {
//   db.Users.findByIdAndUpdate(req.user._id).populate('todos').then((user) => {
//     res.json(user);
//   }).catch((err) => {
//     res.json(err);
//   });
// });

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