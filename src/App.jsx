import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";

import SectionTwo from "./Sections/Sectiontwo/SectionTwo";
import Sectionthree from "./Sections/Sectionthree/Sectionthree";
import Sectionfour from './Sections/Sectionfour/Sectionfour';

import All from './Components/Business/All/all';
import Home from './Sections/Home';

//---------------------------------------------

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/business" element={<All/> } />
      </Routes>
    </Router>
  );
}

export default App;
