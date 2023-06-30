import './App.css';
import React from 'react';
import Locate from './features/locate/Locate';
import MapComponent from './features/map/Map';


function App(): JSX.Element {
  return (
    <div className="App">
      <br />
      <Locate />
      <MapComponent />
    </div>
  );
}

export default App;
