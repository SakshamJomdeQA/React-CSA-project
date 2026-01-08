import React from 'react';
import './Pages.css';

const DashboardProfile: React.FC = () => {
  return (
    <div className="nested-page">
      <h2>Profile Section</h2>
      <p>This is a nested route under Dashboard.</p>
      <div className="info-box">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Member Since:</strong> January 2024</p>
      </div>
    </div>
  );
};

export default DashboardProfile;

