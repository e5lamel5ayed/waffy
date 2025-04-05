import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import All from './Components/Business/All/all';
import Login from './Components/Business/Login/login';
import Home from './Sections/Home';
import JobCards from "./Sections/JobCards/JobCards";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import Register from './Components/Business/Login/Register';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TicketPage from './Components/Tickets/ticket';
import ProtectedRoute from './Components/ProtectedRoute';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Employment from './Components/Employment/Employment';
import EmploymentDetails from './Components/Employment/Employment-Details/Employment-Details';
//------------------------------------------------------

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobCards />} />
        <Route path="/business" element={<All />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/employment-details" element={<EmploymentDetails />} />

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
