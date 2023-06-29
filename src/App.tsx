import './App.css';
import React from 'react';
import Locate from './features/locate/Locate';
import BetterAccuracy from './features/betteraccuracy/BetterAccuracy';

function App(): JSX.Element {
  return (
    <div className="App">
      <br />
      <Locate />
      {/* <BetterAccuracy /> */}
    </div>
  );
}

export default App;
