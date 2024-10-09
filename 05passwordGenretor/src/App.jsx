
import React, { useCallback, useEffect, useState } from 'react';

import './App.css'

function App() {

  const [password,setPassword] = useState("")
  const [length,setLength]= useState(8)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)

  const passwordGenretor = useCallback( ()=>{
   let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number)
    {
      str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }
    if(character)
    {
      str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()* str.length +1)
      pass +=str.charAt(char);
    }

    setPassword(pass)

  } ,[character,number,length])


  useEffect(() => {
    passwordGenretor();
  }, [length, number, character, passwordGenretor]);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    
  };




  
  return (
    <>
     <div className='Password-Generator'>
      <div className='title'>
        <h1>Password Generator</h1>

      </div >
        <div className='input-button'>
          <input type="text" id='password' readOnly value={password}  />
          <label htmlFor="Password"> Password</label>
          <button type='submit' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='Condition'>
        <input
            type="range"
            value={length}
            min="4"
            max="50"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label htmlFor="length">Length {length}</label>
          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor="char"> Characters</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>
        
         

        </div>

     </div>
    </>
  )
}

export default App
