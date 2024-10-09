import React, { useRef, useState } from 'react'
import video from './assets/video.mp4'

const Video = () => {

    let [play ,setPaly]=useState(false)
    let [text ,setText]=useState("")

    let videoRef =useRef(null)

    let playOrPush= ()=>
    {
        if(play)
        {
            setPaly(videoRef.current.pause())
            setText("Video Pause")
        }
        else
        {
            setPaly(videoRef.current.play())  
            setText("Video Paly")

        }
    }

  return (
    <>
     
   

    <video src={video} onClick={playOrPush} ref={videoRef}></video>
    <h1>{text}</h1>

    </>
  )
}

export default Video