import React from 'react';

import GameControls from './components/GameControls/GameControls'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GridBoard from './components/GridBoard/GridBoard'

import './App.css';

function App() {
  return (
    <div className="App">
      <GameControls></GameControls>
      <ColorPicker></ColorPicker>
      <GridBoard></GridBoard>
    </div>
  );
}

export default App;
