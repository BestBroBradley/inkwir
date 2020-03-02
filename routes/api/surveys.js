const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");

router.route("/")
  .get(surveyController.findAll)
  .post(surveyController.create);

router
  .route("/:id")
  .get(surveyController.findById)
  .put(surveyController.update)
  .delete(surveyController.remove);

module.exports = router;