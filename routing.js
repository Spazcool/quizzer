const { checkAnswer } = require('./checkAnswer');
const { randomMath } = require('./generateQuestion');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('cookie-session');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(session({secret: 'mathematics'}))

.use((req, res, next) => {
  // if (typeof(req.session.answer) == 'undefined') {
  //   req.session.answer = [];
  // }
  next();
})

.get('/', (req, res) => {
  let question = randomMath();
  res.render('home', {
    question
  });
})

.post('/check/', urlencodedParser, (req, res) => {
  // if(checkAnswer(req.body.answer, question)){
    // true counter ++
    // new question

  // }else{
    // false counter ++
  // }
  console.log(req.body.answer);
  res.redirect('/');
})

module.exports = router;
