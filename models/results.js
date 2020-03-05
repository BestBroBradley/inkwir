const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ResultSchema = new Schema({
    a1: {
        a: { type: Number, required: true, default: 0 },
        b: { type: Number, required: true, default: 0 },
        c: { type: Number, required: true, default: 0 },
        d: { type: Number, required: true, default: 0 }
    },
    a2: {
        a: { type: Number, required: true, default: 0 },
        b: { type: Number, required: true, default: 0 },
        c: { type: Number, required: true, default: 0 },
        d: { type: Number, required: true, default: 0 }
    },
    a3: {
        a: { type: Number, required: true, default: 0 },
        b: { type: Number, required: true, default: 0 },
        c: { type: Number, required: true, default: 0 },
        d: { type: Number, required: true, default: 0 }
    },
    a4: {
        a: { type: Number, required: true, default: 0 },
        b: { type: Number, required: true, default: 0 },
        c: { type: Number, required: true, default: 0 },
        d: { type: Number, required: true, default: 0 }
    },
    a5: {
        a: { type: Number, required: true, default: 0 },
        b: { type: Number, required: true, default: 0 },
        c: { type: Number, required: true, default: 0 },
        d: { type: Number, required: true, default: 0 }
    }

})

// const resultSchema = new Schema({
//     surveyid: { type: Number, required: true, default: 0 },
//     responseTotal: { type: Number, required: true, default: 0, default: 0 },
//     answerTally: answerTally
// })

const Result = mongoose.model("Result", ResultSchema)

module.exports = Result