import React, { useReducer } from "react";

function UseReducer() {
  const updateCounter = (state, action) =>
  {
    console.log(state,action);
    if(action.type=== "Increment")
    {
      return state+1
    }
    else if(action.type === "Reset")
    {
      return state =0
    }
    else if (action.type === "Decrement")
    {
      return state -1
    }
  }
  let [count, dispatch] = useReducer(updateCounter, 0);

  console.log(useReducer());


  return <>
  <h1>{count}</h1>
  <button  onClick={()=>dispatch({type:"Increment"})}>Increment</button>
  <button  onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
  <button  onClick={()=>dispatch({type:"Reset"})}>Reset</button>
  
  
  
  </>;
}

export default UseReducer;
