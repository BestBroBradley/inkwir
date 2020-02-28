const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
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

const User = mongoose.model("User", userSchema)

module.exports = User