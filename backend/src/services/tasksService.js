const { Task, Status } = require('../database/models');

const getTasks = async () => {
  const tasks = await Task.findAll({ include: 
    { model: Status, as: 'status' },
  });
  return tasks;
};

const newTask = async (task) => {
  await Task.create(task);
};

const delTask = async (id) => {
  await Task.destroy({ where: { id } });
};

module.exports = {
  getTasks,
  newTask,
  delTask,
};