import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let fetchApi = async ()=>{
    let {data} = await axios.get('https://dummyjson.com/products')
    console.log(data.products);
  }

  return (
    <>
   
    </>
  )
}

export default App
