import React from 'react'
import './Square.css'
const Square = (props) => {
  return (
    <div onClick={props.onClick} className='boxes'>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Square
