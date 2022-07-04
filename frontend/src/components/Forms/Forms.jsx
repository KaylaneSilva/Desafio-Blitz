import React, { useState, useEffect } from "react";
import { addTask } from "../../services/fetchAPI";

function Forms (props) {
  const [ description, setDescription ] = useState('');
  const [ status, setStatus ] = useState(1);
  const [ newDate, setNewDate ] = useState('');
  const { reload, setReload } = props;

  useEffect(() => {
    const date = new Date();
    setNewDate(date);
  }, [])

  useEffect(() => {
    setStatus(1);
    setDescription('');
  }, [reload])

  const handleSubmit = (task, event) => {
    event.preventDefault();
    addTask(task);
    setReload(true);
  };

  const newTask = {
    description,
    status_type: status,
    createdAt: newDate,
    updatedAt: newDate,
  };
  
  return (
    <section>
      <form onSubmit={(event) => handleSubmit(newTask, event)}>
        <label
          htmlFor="Description"
        >
          Descrição:
          <input
            name="Description"
            type="text"
            value={description}
            onChange={ ({ target }) => setDescription(target.value) }
            required
          />
        </label>
        <select
          name="Status"
          value={ status }
          onChange={ ({ target }) => setStatus(target.value) }
          required
        >
          <option
            value='1'
          >
            Pendente
          </option>
          <option
            value='2'
          >
            Em andamento
          </option>
          <option
            value='3'
          >
            Pronto
          </option>
        </select>
        <button
          type="submit"
        >

        </button>
      </form>
    </section>
  )
};

export default Forms;