import React, {useState} from 'react'

import './ColorPicker.css'

const COLORS = ['red', 'blue', 'green', 'yellow', 'coral']

const ColorPicker = ({colorFill, incrementCount}) => {
  const [active, setActive] = useState()

  const ColorClicked = (index, color) => {
    setActive(index)
    colorFill(color)
    incrementCount()
  }

  return (
    <div className="color-picker">
      {COLORS.map((color, index) => (
      <div 
        key={index} 
        onClick={() => ColorClicked(index, color)} 
        className={`picker ${color} ${active === index ? 'active': ''}`}>
      </div>
    ))}
    </div>
  )
}

export default ColorPicker