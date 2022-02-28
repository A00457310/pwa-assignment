import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import NameHeader from "./components/NameHeader";
import TaskDb from "./repositories/db";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const getTasksFromServer = await fetchTasks();
      setTasks(getTasksFromServer);
    };
    getTasks();
  }, [])

  const fetchTasks = async () => {
    return TaskDb.getAllTasks();
  };

  const fetchTask = async (id) => {
    return TaskDb.getTask(id);
  };

  const updateShowSetTask = () => {
    console.log('Inside update show set task');
    setShowAddTask(!showAddTask);
  };

  const onAdd = async (task) => {
    console.log('adding', JSON.stringify(task));
    TaskDb.addTask(task.name, task.dueDate, task.assignedTo);
    const getTasksFromServer = await fetchTasks();
    setTasks(getTasksFromServer);
  };

  const deleteTask = async (id) => {
    return TaskDb.deleteTask(id);
  };

  const onDelete = (id) => {
    console.log('Deleted', id);
    const getTasks = async () => {
      await deleteTask(id);
    };
    getTasks();
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header updateShowSetTask={updateShowSetTask} showAddTask={showAddTask} />
        <NameHeader name = "Akshay Kumar [ A00457310 ]" />

        <Route path='/' exact render={(props) => (<>
            {showAddTask && <AddTask onAdd={onAdd} />}
            <Tasks tasks={tasks} onDelete={onDelete} />
          </>)
        } />

        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
