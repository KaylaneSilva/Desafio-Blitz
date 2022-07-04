import React, { useState } from "react";
import Forms from "./components/Forms/Forms";
import TableTask from "./components/tableTasks/TableTasks";

function App() {
  const [ reload, setReload ] = useState(false);

  return (
    <div className="App">
      Todo List
        <Forms reload={ reload } setReload={ setReload } />
        <TableTask reload={ reload } />
    </div>
  );
}

export default App;
