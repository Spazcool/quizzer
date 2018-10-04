function checkAnswer(answer, question){
  // console.log("a: ", answer, " q: ", question);
  // console.log("q eval: ", eval(question));
  if(answer == eval(question)){
    return true;
  }
  return false;
}

module.exports = {
  checkAnswer
};
