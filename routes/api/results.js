const router = require("express").Router();
const resultController = require("../../controllers/resultController");

router.route("/")
  .get(resultController.findAll)
  .post(resultController.create);

router
  .route("/:id")
  .get(resultController.findById)
  .put(resultController.updateResults)

module.exports = router;