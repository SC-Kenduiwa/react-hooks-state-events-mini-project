import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {

  const [newText,setNewText] = useState("");
  const [newCategory,setNewCategory] = useState("Code");

  // console.log(newText,newCategory)

  const formCategories = categories
  .filter((category)=>(category==='All'?false:true))
  .map((category)=>(
    <option key={category}>{category}</option>
  ));

  return (
    <form
    className="new-task-form"
    onSubmit={(e)=>{
      e.preventDefault();
      onTaskFormSubmit({"text":newText,"category":newCategory});
      setNewText("");
    }}>
      <label>
        Details
        <input
        type="text"
        name="text"
        value={newText}
        onChange={(e)=>setNewText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
        name="category"
        onChange={(e)=>setNewCategory(e.target.value)}
        >
          {formCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;