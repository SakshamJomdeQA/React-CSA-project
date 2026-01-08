import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About Page</h1>
      <p>This is a static site demonstrating various routing patterns in React.</p>
      
      <div className="features">
        <h2>Features Included:</h2>
        <ul>
          <li>✓ Basic routing</li>
          <li>✓ Dynamic routes with parameters</li>
          <li>✓ Nested routes</li>
          <li>✓ Combined nested and dynamic routes</li>
        </ul>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default About;

