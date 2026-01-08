import React from 'react';
import './Pages.css';

const DashboardAnalytics: React.FC = () => {
  return (
    <div className="nested-page">
      <h2>Analytics Section</h2>
      <p>This is a nested route under Dashboard.</p>
      <div className="info-box">
        <h3>Stats Overview:</h3>
        <ul>
          <li>Page Views: 1,234</li>
          <li>Unique Visitors: 567</li>
          <li>Avg. Session: 3:45</li>
          <li>Bounce Rate: 42%</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAnalytics;

