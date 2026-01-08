import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Pages.css';

const Dashboard: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>This is the main dashboard with nested routes.</p>

      <nav className="nested-nav">
        <Link to="/dashboard/profile" className="nested-link">Profile</Link>
        <Link to="/dashboard/settings" className="nested-link">Settings</Link>
        <Link to="/dashboard/analytics" className="nested-link">Analytics</Link>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Dashboard;

