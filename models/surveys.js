const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    questions: [
        {
            question1: { type: String, required: true },
            answers1: [
                {
                    q1a: { type: String, required: true },
                    q1b: { type: String, required: true },
                    q1c: { type: String, required: false },
                    q1d: { type: String, required: false },
                }
            ],
            question2: { type: String, required: false },
            answers2: [
                {
                    q2a: { type: String, required: false },
                    q2b: { type: String, required: false },
                    q2c: { type: String, required: false },
                    q2d: { type: String, required: false },
                }
            ],
            question3: { type: String, required: false },
            answers3: [
                {
                    q3a: { type: String, required: false },
                    q3b: { type: String, required: false },
                    q3c: { type: String, required: false },
                    q3d: { type: String, required: false },
                }
            ],
            question4: { type: String, required: false },
            answers4: [
                {
                    q4a: { type: String, required: false },
                    q4b: { type: String, required: false },
                    q4c: { type: String, required: false },
                    q4d: { type: String, required: false },
                }
            ],
            question5: { type: String, required: false },
            answers5: [
                {
                    q5a: { type: String, required: false },
                    q5b: { type: String, required: false },
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