import React from 'react';
import './Pages.css';

const DashboardSettings: React.FC = () => {
  return (
    <div className="nested-page">
      <h2>Settings Section</h2>
      <p>This is a nested route under Dashboard.</p>
      <div className="info-box">
        <h3>Configuration Options:</h3>
        <ul>
          <li>Theme: Light Mode</li>
          <li>Notifications: Enabled</li>
          <li>Language: English</li>
          <li>Privacy: Public</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSettings;

