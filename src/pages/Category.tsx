import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import './Pages.css';

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <div className="page-container">
      <h1>Category: {categoryName}</h1>
      <p>This demonstrates nested routes with dynamic parameters.</p>
      
      <div className="info-box">
        <p>Category ID: {categoryName}</p>
        <p>Type: Dynamic + Nested Route</p>
      </div>

      <nav className="nested-nav">
        <Link to={`/categories/${categoryName}/items`} className="nested-link">View Items</Link>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Category;

