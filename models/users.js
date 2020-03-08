const mongoose = require("mongoose")
const bcrypt = require ("bcryptjs")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required."]
    },
    password: {
        type: String,
        unique: false,
        required: [true, "Password is required."],
        validate: {
            validator: function (v) {
                return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v)
            },
            message: props => `${props.value} is not a valid password`
        }
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid email"],
        required: [true, "Email is required."]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    age: {
        type: Number,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    createdBy: [
        {
        type: Schema.Types.ObjectId,
        ref: "Creator"
        }
]
})


UserSchema.methods.generateHash = (function(password) {
    return bcrypt.hashSync = (password, bcrypt.genSaltSync(10))
})

UserSchema.methods.validPassword = function(password, encrypted) {
    return bcrypt.compareSync(password, encrypted)
}


const User = mongoose.model("User", UserSchema)

module.exports = User