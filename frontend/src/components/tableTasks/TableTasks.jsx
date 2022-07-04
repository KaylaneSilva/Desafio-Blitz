import React, { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../../services/fetchAPI";

function TableTask (props) {
  const [ tasks, setTasks ] = useState([]);
  const [ exclude, setExclude ] = useState(false)
  const { reload, setReload } = props;

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
    setExclude(false);
    setReload(false);
  }, [reload, exclude, setReload])

  const handleClick = (id) => {
    deleteTask(id);
    setExclude(true);
  } 

  return (
    <section>
      { tasks
      ? (
        <table className="table">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Criado em</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            { tasks && tasks.map((task) => {
              const { id, description, status, createdAt } = task;

              const date = new Date(createdAt);

              // Site consultado: https://blog.betrybe.com/javascript/javascript-date-format/
              const formatedDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ status.name }</td>
                  <td>{ formatedDate }</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={ () => handleClick(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    ) : <h3>Adicione uma tarefa</h3> }  
    </section>
  )
};

export default TableTask;