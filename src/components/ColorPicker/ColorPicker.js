import React, {useState} from 'react'

import './ColorPicker.css'

const COLORS = ['red', 'blue', 'green', 'yellow', 'coral']

const ColorPicker = () => {
  const [active, setActive] = useState()

  return (
    <div className="color-picker">
      {COLORS.map((color, index) => (
      <div 
        key={index} 
        onClick={() => setActive(index)} 
        className={`picker ${color} ${active === index ? 'active': ''}`}>
      </div>
    ))}
    </div>
  )
}

export default ColorPicker