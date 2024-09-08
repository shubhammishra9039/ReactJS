import { useState } from 'react'

import './App.css'

function App() {
  let [counter , setcounter]   =    useState(0)
    

   let IncrementValue= () =>{
    setcounter(counter+1)
    
   }

   
   let DecrementValue=()=>{
    if(counter>0) 
    {
      setcounter(counter-1)
    }
    
   
    }

  return (
    <>
    <h1>Counter App</h1>
    <p>Counter Value :{counter}</p>
      <div class='btn'>
        <button onClick={IncrementValue}>Increment </button>
        <button onClick={DecrementValue}>Decrement </button>
      </div>
    </>
  )
}

export default App
