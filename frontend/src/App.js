import React, { useState } from "react";
import Forms from "./components/Forms/Forms";
import TableTask from "./components/tableTasks/TableTasks";
import './App.css'

function App() {
  const [ reload, setReload ] = useState(false);

  return (
    <main>
      <h1 className="title">
        Todo List
      </h1>
      <section
        className="container"
      >
        <Forms reload={ reload } setReload={ setReload } />
        <TableTask reload={ reload } />
      </section>
    </main>
  );
}

export default App;
