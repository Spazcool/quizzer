const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.get('/', (req, res) => {
  res.render('home');
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`working on ${port}`);
});
