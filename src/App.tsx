import React from 'react';
import logo from './logo.svg';
import './App.css';
import Star from './components/Star'

function App() {
  return (
    <div className="App">
      <Raiting />
    </div>
  );
}

function Raiting() {
  return (
    <div>
      <ul>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </ul>
    </div>
  )
}



export default App;
