import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import VoicemailDashboard from './components/VoicemailDashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/voicemails" element={<VoicemailDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;