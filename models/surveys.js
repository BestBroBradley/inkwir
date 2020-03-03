const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    questions: [
        {
            q1: { type: String, required: true },
            a1: [
                {
                    a: { type: String, required: true },
                    b: { type: String, required: true },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            q2: { type: String, required: false },
            a2: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            q3: { type: String, required: false },
            a3: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            q4: { type: String, required: false },
            a4: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            q5: { type: String, required: false },
            a5: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ]
        }
    ],
    createdAt: { type: Date, default: Date.now },
    results: {
        type: Schema.Types.ObjectId,
        ref: "Result"
    }
});

const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;