import React from 'react'
import '../../../CSS/Card-Page.css'

function Card({id,image,title,price}) {
  return (
    <>
    <div className='container'>
        <img src={image}/>
        <h1>{title}</h1>
        <p>{price}</p>
        <button>Buy now</button>

    </div>
    
    </>
  )
}

export default Card