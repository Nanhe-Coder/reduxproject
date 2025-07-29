import React, { memo } from "react";

const Employedata = ({ todos,addtodo }) => {

  console.log("Todos rendered");
  return  (
    <>
    <div>
      {todos.map((value,index)=><p key={index}>{value}</p>)}
      <button onClick={addtodo}>Add Todo</button>
    </div>
    </>
  )
};

export default memo(Employedata);
