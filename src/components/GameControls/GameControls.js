import React from 'react'

import './GameControls.css'

const GameControls = () => {
  return (
    <div className="game-controls">
      <h1>Color Game</h1>
      <button className="new-game-button">New Game</button>
      <div className="moves-counter">Moves counter: </div>
    </div>
  )
}

export default GameControls