import React, { useState } from 'react'

function FunCom() {
  let [student, setStudent]= useState({sname:"shubham"})
  let updateName= ()=>{
    console.log("hy");
    setStudent((student)=>{
      console.log(student);
      student.sname="Mishra"
    })
  }
  return (
    <>
   <h1>name {student.sname}</h1>
   <button onClick={updateName} >click</button>
    </>
  )
}

export default FunCom