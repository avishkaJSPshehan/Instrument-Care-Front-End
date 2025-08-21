import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Technician from './Pages/Technician';
import Contact from './Pages/Contact';
import Login from './Pages/Auth/login';
import Technician_Registration from './Pages/Auth/Technician-Registration';
import Technician_Dashboard from './Pages/Technician/Dashboard';
import User_Dashboard from './Pages/Owner/Dashboard';
import Service_Request from './Pages/Technician/Service_Request'
import Technician_Profile from './Pages/Technician/Profile'
import AllServiceRequestPage from './Pages/Technician/AllServiceRequest';
import AllJobSummaryPage from './Pages/Technician/AllJobSummary'
import Accept_Service_Request from './Pages/Technician/ServiceRequestAccept';
import Reject_Service_Request from './Pages/Technician/ServiceRequestReject';
import ViewProfile from './Pages/Owner/ViewProfile';
import ServiceRequest from './Pages/Owner/ServiceRequest';

export default function App() {
  return (
    <Router>
      <Routes>

        {/* ===== Common Routes ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/contact" element={<Contact />} />

        {/* ===== Auth Routes ===== */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/tech-registration" element={<Technician_Registration />} />

        {/* ===== Technician Routes ===== */}
        <Route path="/tech/dashboard" element={<Technician_Dashboard />} />
        <Route path="/tech/service-request" element={<Service_Request />} />
        <Route path="/tech/profile" element={<Technician_Profile />} />
        <Route path="/tech/all-service-request" element={<AllServiceRequestPage />} />
        <Route path="/tech/all-job-summary" element={<AllJobSummaryPage />} />
        <Route path="/tech/accept-service-request" element={<Accept_Service_Request />} />
        <Route path="/tech/reject-service-request" element={<Reject_Service_Request />} />



        {/* ===== User Routes ===== */}
        <Route path="/user/dashboard" element={<User_Dashboard />} />
        <Route path="/user/view-profile" element={<ViewProfile />} />
        <Route path="/user/service-request" element={<ServiceRequest />} />
      </Routes>
    </Router>
  );
}
