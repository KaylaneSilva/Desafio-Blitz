export const getTasks = async () => {
  const url = 'http://localhost:3000/task';

  const fetchTask = await fetch(url, {
    method: 'GET'
  });
  const data = fetchTask.json();

  return data;
};

export const addTask = async (task) => {
  const url = 'http://localhost:3000/task';

  const send = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  };

  fetch(url, send);
};