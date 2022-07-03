const { Task } = require('../database/models');

const getTasks = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const newTask = async (task) => {
  await Task.create(task);
};

module.exports = {
  getTasks,
  newTask,
};