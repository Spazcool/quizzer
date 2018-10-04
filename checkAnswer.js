function checkAnswer(answer, question){
  // console.log("a: ", answer, " q: ", question);
  // console.log("q eval: ", eval(question));
  // I DOUBT WE CAN RELY ON THE EVAL FUNCTION FOR MORE COMPLEX MATH, ESPECIALLY WHEN SPECIAL CHARS ARE BEING USED
  // TODO
  // FIND EQUIVALENT TO EVAL FOR COMPLEX MATH CHARS, POSSIBLY A LIBRARY SOLUTION
  // Function('"use strict";return (' + question + ')')();

  // if(answer == eval(question)){
  if(answer == Function('"use strict";return (' + question + ')')()){
    return true;
  }
  return false;
}

module.exports = {
  checkAnswer
};
