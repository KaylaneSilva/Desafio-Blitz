const express = require('express');
const bodyParser = require('body-parser');
const { getAllTasks, addNewTask } = require('./src/controllers/tasksController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/task', getAllTasks);

app.post('/task', addNewTask);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});