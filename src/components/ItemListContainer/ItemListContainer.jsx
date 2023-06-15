import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
  return (
    <div>
     
      <h1 className='saludo'>{props.mensaje}</h1>
      <div className='logo'>
        <img  src="../../../../logo.png" alt="centered image" />
      </div>
      
    </div>
  )
}
