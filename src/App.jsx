import React from "react";
import './App.css';        
import Calendar from './components/Calendar'; // Import the Calendar component

const App = () => {
  return (
    <div className="App">
      <h1>Seven Days of Blue Ridge Bliss</h1>
      <h2>Get ready to explore Blue Ridge, Eddie! Use this calendar to navigate your stay in the mountains.</h2>

      <Calendar /> 

    </div>
  );
};

export default App;