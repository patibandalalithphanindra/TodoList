import './App.css';
import {Task} from './Task';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
      taskName: newTask,
      completed : false,
   }

    // const newTodoList = [...todoList, newTask];
    //setTodoList(newTodoList);
    
    //Direct Way
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      // if (task === tasktodelete) {
      //   return false;
      // } else {
      //   return true;
      // }

      //Another Way!
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        else {
          return task;
        }
      })
    );
  };
 
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} placeholder="Add a New Task"/>
        <button onClick={addTask}>+</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
           <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
