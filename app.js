const express = require('express');
const routing = require('./routing');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));
app.use('/', routing)
.use((req, res, next) => {
  res.redirect('/');
})

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`working on ${port}`);
});
