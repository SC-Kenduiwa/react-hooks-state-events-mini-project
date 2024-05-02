import React from "react";

function CategoryFilter({categories,activeButton,setActiveButton}) {


  const categoryButtons = categories.map((category)=>(
    <button
    key={category}
    id={category}
    className={activeButton===category?"selected":""}
    onClick={()=>setActiveButton(category)}
    >{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
