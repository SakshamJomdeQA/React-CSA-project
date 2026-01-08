import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pages.css';

const User: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <div className="dynamic-content">
        <p className="highlight">Dynamic User ID: <strong>{userId}</strong></p>
        <p>This is a dynamic route demonstrating URL parameters.</p>
        <p>Try changing the number in the URL!</p>
      </div>

      <div className="info-box">
        <h3>User Details (Mock Data):</h3>
        <ul>
          <li>User ID: {userId}</li>
          <li>Username: user_{userId}</li>
          <li>Role: Member</li>
        </ul>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default User;

