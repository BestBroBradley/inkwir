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
                    a: { type: String, required: true },
                    b: { type: String, required: true },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            question2: { type: String, required: false },
            answers2: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            question3: { type: String, required: false },
            answers3: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            question4: { type: String, required: false },
            answers4: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ],
            question5: { type: String, required: false },
            answers5: [
                {
                    a: { type: String, required: false },
                    b: { type: String, required: false },
                    c: { type: String, required: false },
                    d: { type: String, required: false },
                }
            ]
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;