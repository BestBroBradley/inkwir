const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

<<<<<<< HEAD
router
  .route("/:id")
=======
router.route("/:id")
>>>>>>> 423a183f41bd70b66ac770224505f1d8974bdcb0
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;