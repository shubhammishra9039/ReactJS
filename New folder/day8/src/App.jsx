
import { useRef } from 'react'
import './App.css'

function App() {
  
let inputRef= useRef(null)

let refFunction = ()=>{
  console.log(inputRef);
  inputRef.current.style.background="red"
  inputRef.current.placeholder="Enter Your Name"
}




  return (
    <>
     <input type="text" ref={inputRef} />
     <button onClick={refFunction}>Click</button>
    </>
  )
}

export default App
