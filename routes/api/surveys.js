const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");

router.route("/")
  .get(surveyController.findAll)
  .post(surveyController.create);

router
  .route("/:id")
  .get(surveyController.getResults)
  .put(surveyController.addResults)
  .delete(surveyController.remove);

module.exports = router;

