import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import Product from './pages/Product';
import BlogPost from './pages/BlogPost';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import DashboardSettings from './pages/DashboardSettings';
import DashboardAnalytics from './pages/DashboardAnalytics';
import Category from './pages/Category';
import CategoryItems from './pages/CategoryItems';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamic Routes */}
          <Route path="/user/:userId" element={<User />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>

          {/* Combined Nested + Dynamic Routes */}
          <Route path="/categories/:categoryName" element={<Category />}>
            <Route path="items" element={<CategoryItems />} />
          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
