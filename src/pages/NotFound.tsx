import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const NotFound: React.FC = () => {
  return (
    <div className="page-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-link">← Go to Home</Link>
    </div>
  );
};

export default NotFound;

