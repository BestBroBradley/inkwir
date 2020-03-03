const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const db = require("../models")

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.Users.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                console.log(err)
                return done(err)
            }
            if (!user) {
                return done(null, false, {message: "User not found."})
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, {message: "Invalid password"})
            } else {
                return done(null, user)
            }
        })
    }
))

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    db.Users.findById(id, function (err, user) {
        done(err, user)
    })
})

module.exports = passport