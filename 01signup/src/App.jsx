import React, { useState } from 'react';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import statement

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
