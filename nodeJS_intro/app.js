const path = require('path');
const express = require('express')
const app = express()
const port = 3012

const next1 = (req, res, next) => {
  console.log('From 1');
  next();
}

const next2 = (req, res, next) => {
  console.log('From 2');
  next();
}
// const next3 = (req, res, next) => {
//   console.log('From 3');
//   next();
// }
// const next4 = (req, res, next) => {
//   console.log('From 4');
//   next();
// }
// const next5 = (req, res, next) => {
//   console.log('From 5');
//   next();
// }

app.get('/', [next1, next2], (req, res, next) => {
  console.log('From root');
  next();
}, (req, res) => {
  res.end();
  console.log('Last handler', path.join('app.js'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})