const router = require("express").Router();
const surveyRoutes = require("./surveys");
const userRoutes = require("./users");
const resultRoutes = require("./results");

router.use("/surveys", surveyRoutes);
router.use("/users", userRoutes);
router.use("/results", resultRoutes);


module.exports = router;