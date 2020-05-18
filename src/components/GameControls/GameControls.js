import React from 'react'

import './GameControls.css'

const GameControls = ({movesCounter, startClicked}) => {
  return (
    <div className="game-controls">
      <h1>Color Game</h1>
      <button onClick={startClicked} className="new-game-button">New Game</button>
      <div className="moves-counter">Moves : {movesCounter}</div>
    </div>
  )
}

export default GameControls