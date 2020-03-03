const mongoose = require("mongoose")
const Schema = mongoose.Schema

const answerTally = new Schema({
    q1: [{
        a1: { type: Number, required: true, default: 0 },
        a2: { type: Number, required: true, default: 0 },
        a3: { type: Number, required: false },
        a4: { type: Number, required: false }
    }],
    q2: [{
        a1: { type: Number, required: false },
        a2: { type: Number, required: false },
        a3: { type: Number, required: false },
        a4: { type: Number, required: false }
    }],
    q3: [{
        a1: { type: Number, required: false },
        a2: { type: Number, required: false },
        a3: { type: Number, required: false },
        a4: { type: Number, required: false }
    }],
    q4: [{
        a1: { type: Number, required: false },
        a2: { type: Number, required: false },
        a3: { type: Number, required: false },
        a4: { type: Number, required: false }
    }],
    q5: [{
        a1: { type: Number, required: false },
        a2: { type: Number, required: false },
        a3: { type: Number, required: false },
        a4: { type: Number, required: false }
    }]

})

// const resultSchema = new Schema({
//     surveyid: { type: Number, required: true },
//     responseTotal: { type: Number, required: true, default: 0 },
//     answerTally: answerTally
// })

const Result = mongoose.model("Result", answerTally)

module.exports = Result