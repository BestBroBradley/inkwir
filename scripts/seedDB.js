const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/surveys"
);

const surveySeed = [
    {
        title: "Politics 2020",
        author: "Nick.Koch",
        category: "Politics",
        questions: [
            {
                q1: "Which political candidate do you support in 2020?",
                a1: [
                    {
                        a: "Donald Trump",
                        b: "Bernie Sanders",
                        c: "Elizabeth Warren",
                        d: "Giant Meteor"
                    }
                ],
                q2: "Which political party are you affiliated with?",
                a2: [
                    {
                        a: "Democrat",
                        b: "Republican",
                        c: "Independent",
                        d: "None of the above"
                    }
                ],
                q3: "Do you think tribalism is a good think for the future of the country?",
                a3: [
                    {
                        a: "No",
                        b: "Yes"
                    }
                ],
                q4: "Do you believe the electoral college should be abolished?",
                a4: [
                    {
                        a: "Yes",
                        b: "No"
                    }
                ],
                q5: "Do believe that Russia is actively interfering in our elections?",
                a5: [
                    {
                        a: "Yes",
                        b: "No"
                    }
                ],
                createdAt: new Date(Date.now())
            }
        ]
    },
    {
        title: "Favorite Things",
        author: "Kate.Hoth",
        category: "Things",
        questions: [
            {
                q1: "What is your favorite color?",
                a1: [
                    {
                        a: "Green",
                        b: "Red",
                        c: "Blue",
                        d: "Purple"
                    }
                ],
                q2: "What is your favorite type of music?",
                a2: [
                    {
                        a: "Popular",
                        b: "Hip Hop",
                        c: "Country",
                        d: "Classical"
                    }
                ],
                q3: "What is your favorite season?",
                a3: [
                    {
                        a: "Spring",
                        b: "Summer",
                        c: "Fall",
                        d: "Winter"
                    }
                ],
                q4: "Which type of food do you prefer?",
                a4: [
                    {
                        a: "Italian",
                        b: "Mexican",
                        c: "Mediterranean",
                        d: "American"
                    }
                ],
                q5: "Now answer the ultimate question: Cats or Dogs??",
                a5: [
                    {
                        a: "Cats",
                        b: "Dogs"
                    }
                ],
                createdAt: new Date(Date.now())
            }
        ]
    },
    {
        title: "Technology Preferences",
        author: "Allison.Bradley",
        category: "Technology",
        questions: [
            {
                q1: "Which operating system do you use?",
                a1: [
                    {
                        a: "PC",
                        b: "Mac",
                        c: "Linux"
                    }
                ],
                q2: "What type of phone do you have?",
                a2: [
                    {
                        a: "Apple",
                        b: "Android",
                        c: "Windows",
                        d: "Flip phone"
                    }
                ],
                q3: "What platform do you play games on?",
                a3: [
                    {
                        a: "PC",
                        b: "Playstation",
                        c: "Xbox",
                        d: "Nintendo"
                    }
                ],               
                createdAt: new Date(Date.now())
            }
        ]
    },
    {
        title: "Favorite Books",
        author: "Lori.Arosteguy",
        category: "Literature",
        questions: [
            {
                q1: "What is your favorite genre of book?",
                a1: [
                    {
                        a: "Adventure",
                        b: "Fantasy",
                        c: "Romance",
                        d: "Sci-Fi"
                    }
                ],
                q2: "Which format do you prefer to read?",
                a2: [
                    {
                        a: "Newspaper",
                        b: "Magazine",
                        c: "Paperback/Hardback",
                        d: "Tablet/Reader"
                    }
                ],
                q3: "How many books do you read per month?",
                a3: [
                    {
                        a: "Less than one per month",
                        b: "One book per month",
                        c: "One every two weeks",
                        d: "One book per week"
                    }
                ],
                q4: "How much do you enjoy reading?",
                a4: [
                    {
                        a: "Very much",
                        b: "Enjoyable",
                        c: "Just okay",
                        d: "Not at all"
                    }
                ],
                createdAt: new Date(Date.now())
            }
        ]
    }
];

const userSeed = [
    {
        username: "Nick.Koch",
        password: "password",
        email: "marauder30@gmail.com",
        surveysMade: [],
        surveysTaken: [],
        isLoggedIn: false,
        age: 35,
        nationality: "American",
        gender: "Male"
    },
    {
        username: "Lori.Arosteguy",
        password: "password",
        email: "Lori.Arosteguy@gmail.com",
        surveysMade: [],
        surveysTaken: [],
        isLoggedIn: false,
        age: null,
        nationality: null,
        gender: "Female"
    },
    {
        username: "Allison.Bradley",
        password: "password",
        email: "Allison.Bradley@gmail.com",
        surveysMade: [],
        surveysTaken: [],
        isLoggedIn: false,
        age: null,
        nationality: null,
        gender: "Female"
    },
    {
        username: "Kate.Hoth",
        password: "password",
        email: "Kate.Hoth@gmail.com",
        surveysMade: [],
        surveysTaken: [],
        isLoggedIn: false,
        age: null,
        nationality: null,
        gender: "Female"
    }
]

db.Surveys
  .remove({})
  .then(() => db.Surveys.collection.insertMany(surveySeed))
  .then(data => {
      console.log(data.result.n + " surveys inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
      console.log(data.result.n + " users inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  })