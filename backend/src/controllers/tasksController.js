const { getTasks, newTask, delTask } = require('../services/tasksService');

const getAllTasks = async (_req, res) => {
  const tasks = await getTasks();

  res.status(200).json(tasks);
};

const addNewTask = async (req, res) => {
  const task = req.body;

  const addTask = await newTask(task);

  return res.status(201).json(addTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  await delTask(id);

  res.status(204).end();
};

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTask,
};