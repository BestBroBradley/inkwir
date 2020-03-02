const mongoose = require("mongoose")
const bcrypt = require ("bcryptjs")

const UserSchema = new mongoose.Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid email"]},
    surveysMade: {type: Array, default:[], required: true},
    surveysTaken: {type: Array, default:[], required: true},
    isLoggedIn: {type:Boolean, default: false, required: true},
    age: {type: Number, required: false},
    nationality: {type: String, required: false},
    gender: {type: String, required: false},
})

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

UserSchema.methods.addHook = ("beforeCreate", function(user) {
    return user.password = brycpt.hashSync(user.password, bcrypt.genSaltSync(10), null)
})

const User = mongoose.model("User", UserSchema)

module.exports = User