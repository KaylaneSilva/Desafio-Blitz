import React, { useState, useEffect } from "react";
import { getTasks } from "../../services/fetchAPI";

function TableTask (props) {
  const [ tasks, setTasks ] = useState([]);
  const { reload } = props;

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, [reload])

  console.log(tasks)

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

              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ status.name }</td>
                  <td>{ createdAt }</td>
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