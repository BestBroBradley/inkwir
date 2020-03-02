const router = require("express").Router();
const surveyRoutes = require("./surveys");
const userRoutes = require("./users");

router.use("/surveys", surveyRoutes);
router.use("/users", userRoutes);


module.exports = router;