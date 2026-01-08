import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <p>Welcome to the static site with Create React App!</p>
      
      <div className="navigation-section">
        <h2>Navigation Examples:</h2>
        
        <div className="nav-group">
          <h3>Basic Routes:</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="nav-group">
          <h3>Dynamic Routes:</h3>
          <ul>
            <li><Link to="/user/1">User 1</Link></li>
            <li><Link to="/user/42">User 42</Link></li>
            <li><Link to="/product/laptop">Product - Laptop</Link></li>
            <li><Link to="/product/phone">Product - Phone</Link></li>
            <li><Link to="/blog/my-first-post">Blog Post</Link></li>
          </ul>
        </div>

        <div className="nav-group">
          <h3>Nested Routes:</h3>
          <ul>
            <li><Link to="/dashboard">Dashboard (Main)</Link></li>
            <li><Link to="/dashboard/profile">Dashboard → Profile</Link></li>
            <li><Link to="/dashboard/settings">Dashboard → Settings</Link></li>
            <li><Link to="/dashboard/analytics">Dashboard → Analytics</Link></li>
          </ul>
        </div>

        <div className="nav-group">
          <h3>Combined (Nested + Dynamic):</h3>
          <ul>
            <li><Link to="/categories/electronics/items">Category → Items</Link></li>
            <li><Link to="/categories/books/items">Books → Items</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

