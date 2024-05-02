import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [todos,setTodos] = useState(TASKS || []);
  const [activeButton,setActiveButton] = useState("All")
  // const [newTask,setNewTask] = useState({});

  function onTaskFormSubmit(task){
    // setNewTask((newTask)=>{
    //   newTask=task;
    //   return newTask;
    // })

    const updatedTodos = [...todos,task];
    setTodos((todos)=>{
      todos=updatedTodos;
      return todos
    });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
      categories={CATEGORIES}
      activeButton={activeButton}
      setActiveButton={setActiveButton}
      />

      <NewTaskForm
      categories={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />

      <TaskList
      tasks={TASKS}
      activeButton={activeButton}
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;