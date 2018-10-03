function checkAnswer(answer, question){
  if(question.eval() === answer){
    return true;
  }
}

module.exports = {
  checkAnswer
};
