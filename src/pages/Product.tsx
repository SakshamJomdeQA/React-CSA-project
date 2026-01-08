import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pages.css';

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="page-container">
      <h1>Product Details</h1>
      <div className="dynamic-content">
        <p className="highlight">Product: <strong>{productId}</strong></p>
        <p>This page demonstrates dynamic routing with string parameters.</p>
      </div>

      <div className="info-box">
        <h3>Product Information:</h3>
        <ul>
          <li>Product ID: {productId}</li>
          <li>Category: Electronics</li>
          <li>Status: Available</li>
        </ul>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Product;

