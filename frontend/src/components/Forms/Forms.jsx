import React, { useState, useEffect } from "react";
import { addTask } from "../../services/fetchAPI";
import './Forms.css';

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

  const handleSubmit = (event) => {
    const newTask = {
      description,
      status_type: status,
      createdAt: newDate,
      updatedAt: newDate,
    };

    event.preventDefault();
    setReload(true);
    addTask(newTask);
  };
  
  return (
    <section
      className="sectionForm"
    >
      <form
        className="divForm"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="Description"
            className="input-group"
          >
            Descrição:
          </label>
          <input
            name="Description"
            type="text"
            value={description}
            className="form-control"
            onChange={ ({ target }) => setDescription(target.value) }
            required
          />
        </div>
        <div>
        <label
            htmlFor="Status"
            className="input-group"
          >
            Status:
          </label>
            <select
            name="Status"
            value={ status }
            onChange={ ({ target }) => setStatus(target.value) }
            className="form-select"
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
        </div>       
        <button
          type="submit"
          className="btn btn-primary"
        >
          Adicionar tarefa
        </button>
      </form>
    </section>
  )
};

export default Forms;