import './App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Counter from './features/counter/Counter';
import { selectCounterValue } from './features/counter/selectors';
import Locate from './features/locate/Locate';

function App(): JSX.Element {
  const value = useSelector(selectCounterValue);

  return (
    <div className="App">
      <nav>
        <Link to="/counter">Counter</Link>
        <Link to="/locate">Locate</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/locate" element={<Locate />} />


      </Routes>
    </div>
  );
}

export default App;
