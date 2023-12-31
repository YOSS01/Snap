import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './Components/Home/Home';
import NavBar from './Components/Partials/NavBar';

function App() {
  return (
    <BrowserRouter className="App w-full h-[100vh]" style={{backgroundColor: 'hsl(0, 0%, 98%)'}}>
      <NavBar />
      <Routes>
        <Route path='/Snap' element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
