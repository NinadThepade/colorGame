import React from 'react'

import './GridBoard.css'

const GridBoard = ({grid, colors}) => {
  const checkIfGameOver = () => {
    let colorIndexFirstCell = grid.nodes[0].color;
    let nodesArray = Object.values(grid.nodes)
    let isGameComplete = nodesArray.every((item) => item.color === colorIndexFirstCell)

    if(isGameComplete) {
      alert('Game Over')
    }
  }

  let rows = <div> No grid data</div>
  
  if(grid.nodes) {
    rows = Object.keys(grid.nodes).map((v) => {
      let color = colors[grid.nodes[v].color]
      let size = grid.size
      let classString = "cell-" + size + " " + color;
  
      return <div key={v} className={classString}></div>
    });
    checkIfGameOver()
  }

  return (
    <div className="grid-board">
      {rows}
    </div>
  )
}

export default GridBoard