const { randomMath } = require('./generateQuestion');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

let thing = randomMath();
app.get('/', (req, res) => {
  res.render('home', { thing });
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`working on ${port}`);
});
