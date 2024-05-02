import React from "react";
import Task from "./Task";

function TaskList({tasks,activeButton,todos,setTodos}) {

  const filteredTodos = todos?.filter((todo)=>{
    if(activeButton==='All'){
      return true
    }
    else{
      return(activeButton===todo.category)
    }
  })

  const tasksList = filteredTodos?.map((todo)=>(
    <Task
    key={`${todo.text}-${todo.category}`}
    text={todo.text}
    category={todo.category}
    removeTask={removeTask}
    />
  ))


  function removeTask(text){
    const updatedList = todos.filter((todo)=>(todo.text!==text))
    setTodos((todos)=>{
      todos=updatedList
      return todos;
    })
  }


  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
