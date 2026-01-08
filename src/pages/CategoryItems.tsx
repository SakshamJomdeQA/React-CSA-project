import React from 'react';
import { useParams } from 'react-router-dom';
import './Pages.css';

const CategoryItems: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const mockItems = [
    `${categoryName} Item 1`,
    `${categoryName} Item 2`,
    `${categoryName} Item 3`,
    `${categoryName} Item 4`,
  ];

  return (
    <div className="nested-page">
      <h2>Items in {categoryName}</h2>
      <p>This is a nested page inside a dynamic category route.</p>
      <div className="info-box">
        <h3>Available Items:</h3>
        <ul>
          {mockItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryItems;

