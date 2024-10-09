import React, { useRef, useState } from 'react'
import audio from './assets/audio.mp3'


const Audio = () => {


    let [play ,setPaly]=useState(false)
  

    let audioRef =useRef(null)

    let playOrPush= ()=>
    {
        if(play)
        {
            setPaly(audioRef.current.pause())
           
        }
        else
        {
            setPaly(audioRef.current.play())  
            

        }
    }

  return (
    <>
    <audio src={audio} ref={audioRef} ></audio>
    <button onClick={playOrPush}>Click</button>
    </>
  )
}

export default Audio