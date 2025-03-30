import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import All from './Components/Business/All/all';
import Login from './Components/Business/Login/login';
import Home from './Sections/Home';
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import Register from './Components/Business/Login/Register';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TicketPage from './Components/Tickets/ticket';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<All />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/ticket"
          element={
            <ProtectedRoute>
              <TicketPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
