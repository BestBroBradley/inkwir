const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const passport = require("./config/passport")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
