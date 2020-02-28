const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    questions: [
        {
            question1: { type: String, required: true },
            answers: [
                {
                    q1a: { type: String, required: true },
                    q1b: { type: String, required: true },
                    q1c: { type: String, required: false },
                    q1d: { type: String, required: false },
                }
            ],
            question2: { type: String, required: false },
            answers: [
                {
                    q2a: { type: String, required: true },
                    q2b: { type: String, required: true },
                    q2c: { type: String, required: false },
                    q2d: { type: String, required: false },
                }
            ],
            question3: { type: String, required: false },
            answers: [
                {
                    q3a: { type: String, required: true },
                    q3b: { type: String, required: true },
                    q3c: { type: String, required: false },
                    q3d: { type: String, required: false },
                }
            ],
            question4: { type: String, required: false },
            answers: [
                {
                    q4a: { type: String, required: true },
                    q4b: { type: String, required: true },
                    q4c: { type: String, required: false },
                    q4d: { type: String, required: false },
                }
            ],
            question5: { type: String, required: false },
            answers: [
                {
                    q5a: { type: String, required: true },
                    q5b: { type: String, required: true },
                    q5c: { type: String, required: false },
                    q5d: { type: String, required: false },
                }
            ]
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;