import React, { useRef } from 'react'
import { useState } from 'react'
import Audio1 from "./Audio.mp3"
import Audio2 from "./Audio2.mp3"
import Audio3 from "./Bella.mp3"
import "./Global.css"
import Maan from "./Mann.jpg"
import Aaj from "./aaj.jpg"

import { FaRegPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";

const Main = () => {
    let [play, setPlay] = useState(false);
    let [currentTime, setCurrentTime] = useState(0)
    let audioRef = useRef(null)
    let songs = [
        {
            title: "maan mer jaan",
            src: Audio1,
            img: Maan
        }, {
            title: "Aaj Ki raat",
            src: Audio2,
            img: Aaj
        },
        {
            title: "Bella cio",
            src: Audio3,
            img: Bella
        }
    ]

    let [currentSongIndex, setCurrentSongIndex] = useState(0)
    let currentSong = songs[currentSongIndex]
    console.log(currentSong)

    let PlayOrPause = () => {
        if (play) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlay(!play)
    }


    let timeUpdateHandler = (e) => {
        console.log(e.target)
        console.log(e.target.currentTime)
        setCurrentTime(e.target.currentTime)
    }

    let draghanlder = (e) => {
        audioRef.current.currentTime = e.target.value
        setCurrentTime(e.target.value)
        console.log(e.target.value)
    }

    let skipForwardPlayHandler = (direction) => {

        if (direction === "skip-forward") {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
        } else if (direction === "skip-back") {
            setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
        }

    }

    return (
        <div className='cardPlay'>

            <audio
                src={currentSong.src}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onEnded={() => skipForwardPlayHandler("skip-forward")}
            ></audio>

            <img src={currentSong.img} alt="" style={{ height: "400px", width: "600px" }} />
            <h1>Title : {currentSong.title}</h1>
            <div>
                <input
                    type="range"
                    value={currentTime}
                    max={audioRef.current ? audioRef.current.duration : 0}
                    onChange={draghanlder}
                />
            </div>

            <div className='divCard'>
                <button onClick={() => skipForwardPlayHandler("skip-back")}><FaBackward /></button>
                <button onClick={PlayOrPause}>{play ? <FaRegPauseCircle /> : <FaPlayCircle />}</button>
                <button onClick={() => skipForwardPlayHandler("skip-forward")}><FaForward /></button>
            </div>

        </div>
    )
}

export default Main