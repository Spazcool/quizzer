const { checkAnswer } = require('./checkAnswer');
const { randomMath } = require('./generateQuestion');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('cookie-session');
// urlencodedParser ALLOWS US TO PUSH AND PULL INFORMATION FROM THE URL BAR
// AS WELL AS FROM CERTIAN HTML ELEMENTS IN THE PAGE, LIKE AN FORM INPUT FIELD
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// USE SESSIONS/COOKIES TO STORE TEMPORARY COUNTER INFORMATION, KEEPING INFO EVEN AFTER REFRESHING THE BROWSER
router.use(session({secret: 'mathematics'}))
.use((req, res, next) => {
  if (typeof(req.session.asked) == 'undefined') {
    req.session.asked = [];
  }
  next();
  // POSSIBLE ASKED ELEMENT DESIGN asked[0] === {question, answer, eval(T/F)}
})

// GET REQUEST = GRAB INFORMATION FROM A LOCATION,
// IN THIS CASE THE LOCATION IS "/" OR THE ROOT DIRECTORY / HOMEPAGE
.get('/', (req, res) => {
  let counter = req.session.asked;
  let question = randomMath();
  res.render('home', {
    question,
    counter
  });
})

// POST REQUEST = GRAB INFORMATION FROM A LOCATION BUT USE SOME SPECIAL INFORMAITON TO DO SO
// IN THIS CASE WE'RE PULLING INFORMAITON FROM THE INPUT FIELD TO USE IN OUR checkAnswer FUNCTION
.post('/check/', urlencodedParser, (req, res) => {
  // YOU CAN ACCESS THE SPECIAL INFORAMTION FROM THE PAGE HERE BY USING CONSOLE LOGGING
  // THE OBJECT THE FOLLOWING LINES ARE REFERENCING IS EMBEDDED IN THE FORM IN THE HOME.EJS FILE
  // console.log(req.body.answer);
  // console.log(req.body.question);
  if(checkAnswer(req.body.answer, req.body.question)){
    req.session.asked.push({
      question: req.body.question,
      answer: req.body.answer,
      correct: true
    });
  }else{
    req.session.asked.push({
      question: req.body.question,
      answer: req.body.answer,
      correct: false
    });
  }
  console.log(req.session.asked);
  res.redirect('/');
})

module.exports = router;
