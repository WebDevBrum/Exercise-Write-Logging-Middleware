import express from 'express';
import logger from './utilities/logger';

const app = express();
const port = 3000;

// const myMiddleware = (req, res, next) => {
//   console.log()
// };

app.get('/players', logger, (req, res) => {
  res.send('PLAYERS!!')
})

app.get('/teams', logger, (req, res) => {
  res.send('TEAMS!!')
})

app.get('/groups', (req, res) => {
  res.send('GROUPS!!')
})


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});