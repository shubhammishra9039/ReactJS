import React, { useState } from 'react'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

function Memo() {
   let [count , setCount] = useState(0)
    let update = ()=>
    {
        return setCount(count +1)
    }
    console.log("Memo Render");
  return (
    <>
    <Nav  />
    <Section counter={count} />
    <Footer/>
    <button onClick={update}>Count</button>
    
    </>
  )
}

export default Memo