import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Hero from "./Sections/Hero";
import SectionTwo from './Sections/SectionTwo';

//---------------------------------------------

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <SectionTwo/>
      <Routes>
        <Route path="/contact" element={<h1>تحدث معنا</h1>} />
        <Route path="/jobs" element={<h1>التوظيف</h1>} />
        <Route path="/blog" element={<h1>المدونة</h1>} />
        <Route path="/business" element={<h1>وفّي أعمال</h1>} />
        <Route path="/faq" element={<h1>الأسئلة الشائعة</h1>} />
        <Route path="/features" element={<h1>الميزات</h1>} />
        <Route path="/login" element={<h1>صفحة تسجيل الدخول</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
