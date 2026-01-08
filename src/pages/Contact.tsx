import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 React Street, Web City, 12345</p>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Contact;

