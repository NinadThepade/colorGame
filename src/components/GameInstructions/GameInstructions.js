import React from 'react'

import './GameInstructions.css'

function GameInstructions() {
  return (
    <ol className="instructions">
      <li>The goal of the game is to convert all the cells to single color</li>
      <li>The game starts from top-left (first) cell</li>
      <li>Click on the colored circle in pallette to change the color of first cell</li>
      <li>All the adjoning cells with same color will merge</li>
      <li>Continue step 3 until the game ends</li>
    </ol>
  )
}

export default GameInstructions
