import React, {useState} from 'react';

import GameControls from './components/GameControls/GameControls'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GridBoard from './components/GridBoard/GridBoard'
import { Graph } from './components/Graph/Graph';

import './App.css';

const SIZE = 10;
const COLORS = ['red', 'blue', 'green', 'yellow', 'coral']

function App() {
  const [movesCounter, setMovesCounter] = useState(0)
  const [graph, setGraph] = useState(new Graph(SIZE))

  const incrementCount = () => {
    setMovesCounter(prevState => prevState + 1)
  }
  
  const startClicked = () => {
    setGraph(new Graph(SIZE))
    setMovesCounter(0)
  }

  const colorFill = (color) => {
    let colorIndex = COLORS.indexOf(color)
    graph.colorFill(colorIndex);
  }

  return (
    <div className="App">
      <GameControls movesCounter={movesCounter} startClicked={startClicked}></GameControls>
      <ColorPicker colors={COLORS} colorFill={colorFill} incrementCount={incrementCount}></ColorPicker>
      <GridBoard grid={graph} colors={COLORS} size={SIZE}></GridBoard>
    </div>
  );
}

export default App;
