function randomMath(){
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let abString = a + ' + ' + b;
  return abString;
}

module.exports = {
  randomMath
};
