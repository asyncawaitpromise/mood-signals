import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './routes/Homepage';
import MoodPicker from './routes/MoodPicker';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/choose" element={ <MoodPicker /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;