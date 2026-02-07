import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuCategories = [
    {
      title: 'Shop by Category',
      items: [
        { id: 1, name: 'Electronics', icon: '📱', action: () => navigate('/home') },
        { id: 2, name: 'Fashion', icon: '👗', action: () => navigate('/home') },
        { id: 3, name: 'Home & Kitchen', icon: '🏠', action: () => navigate('/home') },
        { id: 4, name: 'Beauty & Personal Care', icon: '💄', action: () => navigate('/home') },
        { id: 5, name: 'Books', icon: '📚', action: () => navigate('/home') },
        { id: 6, name: 'Sports & Fitness', icon: '⚽', action: () => navigate('/home') },
        { id: 7, name: 'Toys & Games', icon: '🎮', action: () => navigate('/home') },
        { id: 8, name: 'Automotive', icon: '🚗', action: () => navigate('/home') }
      ]
    },
    {
      title: 'Programs & Features',
      items: [
        { id: 9, name: 'Amazon Pay', icon: '💳', action: () => navigate('/wallet') },
        { id: 10, name: 'Gift Cards', icon: '🎁', action: () => {} },
        { id: 11, name: 'Amazon Prime', icon: '👑', action: () => {} },
        { id: 12, name: 'Subscribe & Save', icon: '🔄', action: () => {} },
        { id: 13, name: 'Today\'s Deals', icon: '⚡', action: () => navigate('/home') },
        { id: 14, name: 'Sell on Amazon', icon: '🏪', action: () => {} }
      ]
    },
    {
      title: 'Help & Settings',
      items: [
        { id: 15, name: 'Your Account', icon: '👤', action: () => navigate('/profile') },
        { id: 16, name: 'Customer Service', icon: '🎧', action: () => navigate('/chatbot') },
        { id: 17, name: 'Wish List', icon: '❤️', action: () => {} },
        { id: 18, name: 'Your Orders', icon: '📦', action: () => navigate('/profile') },
        { id: 19, name: 'Settings', icon: '⚙️', action: () => {} }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <Header />

      <div className="menu-content">
        <div className="menu-user-section">
          <div className="menu-user-avatar">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="menu-user-info">
            <h3>Hello, {user?.name || 'User'}</h3>
            <p>{user?.email}</p>
          </div>
        </div>

        {menuCategories.map((category, index) => (
          <div key={index} className="menu-category">
            <h4 className="category-title">{category.title}</h4>
            <div className="category-items">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="category-item"
                  onClick={item.action}
                >
                  <div className="item-icon">{item.icon}</div>
                  <span className="item-name">{item.name}</span>
                  <svg
                    className="item-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="menu-footer">
          <p className="demo-note">🎯 This is a demo menu page</p>
          <p className="menu-version">Amazon MVP v1.0.0</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Menu;
