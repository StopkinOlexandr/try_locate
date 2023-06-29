import './App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Locate from './features/locate/Locate';

function App(): JSX.Element {


  return (
    <div className="App">

      <br />
      <Routes>

        <Route path="/" element={<Locate />} />


      </Routes>
    </div>
  );
}

export default App;
