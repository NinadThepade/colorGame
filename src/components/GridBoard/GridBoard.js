import React from 'react'

import './GridBoard.css'

const GridBoard = ({grid, colors}) => {
  let rows = <div> No grid data</div>
  
  if(grid.nodes) {
    rows = Object.keys(grid.nodes).map((v) => {
      let color = colors[grid.nodes[v].color]
      let size = grid.size
      let classString = "cell-" + size + " " + color;
  
      return <div key={v} className={classString}></div>
    });
  }

  return (
    <div className="grid-board">
      {rows}
    </div>
  )
}

export default GridBoard