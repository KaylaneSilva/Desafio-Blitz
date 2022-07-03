const { getTasks, newTask } = require('../services/tasksService');

const getAllTasks = async (_req, res) => {
  const tasks = await getTasks();

  res.status(200).json(tasks);
};

const addNewTask = async (req, res) => {
  const task = req.body;

  const addTask = await newTask(task);

  return res.status(201).json(addTask);
};

module.exports = {
  getAllTasks,
  addNewTask,
};