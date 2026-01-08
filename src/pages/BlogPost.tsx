import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pages.css';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="page-container">
      <h1>Blog Post</h1>
      <div className="dynamic-content">
        <p className="highlight">Post Slug: <strong>{slug}</strong></p>
        <h2>{slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
        <p>This is a blog post page with a slug-based dynamic route.</p>
        <p className="article-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default BlogPost;

