import React, {useState} from 'react'

import './ColorPicker.css'

const ColorPicker = ({colors, colorFill, incrementCount}) => {
  const [active, setActive] = useState()

  const ColorClicked = (index, color) => {
    setActive(index)
    colorFill(color)
    incrementCount()
  }

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
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