import { useState } from "react";

import "./BgColorChange.css";

function BgColorChange() {

const [color,setColor]=useState("red")





  return (
    <>
     <div className="main"  style={{backgroundColor: color}}>
     <div class="tittle" >
     <h1>BackGround Color Changer</h1>
     </div>
     
        <div class="btn">
            <button onClick={()=>setColor("red")} id="red">Red</button>
            <button onClick={()=>setColor("blue")} id="blue">blue</button>
            <button onClick={()=>setColor("yellow")} id="yellow">yellow</button>
            <button onClick={()=>setColor("green")} id="green">green</button>
            <button onClick={()=>setColor("black")} id="black">black</button>

        </div>
     </div>

    </>
  );
}

export default BgColorChange