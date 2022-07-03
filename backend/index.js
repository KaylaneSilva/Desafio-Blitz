const express = require('express');
const bodyParser = require('body-parser');
const { getAllTasks, addNewTask } = require('./src/controllers/tasksController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/task', getAllTasks);

app.post('/task', addNewTask);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});