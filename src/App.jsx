import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import All from './Components/Business/All/all';
import Login from './Components/Business/Login/login';
import Home from './Sections/Home';
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
//---------------------------------------------

function App() {
  return (
    <Router>
        <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/business" element={<All/> } />
        <Route path="/login" element={<Login/> } />
      </Routes>
    </Router>
  );
}

export default App;
