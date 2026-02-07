import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/');
    }
  };

  const menuItems = [
    {
      id: 1,
      title: 'Your Orders',
      icon: '📦',
      description: `${orders.length} orders`,
      action: () => {}
    },
    {
      id: 2,
      title: 'Your Addresses',
      icon: '📍',
      description: 'Manage delivery addresses',
      action: () => navigate('/address')
    },
    {
      id: 3,
      title: 'Your Wishlist',
      icon: '❤️',
      description: 'View your saved items',
      action: () => {}
    },
    {
      id: 4,
      title: 'Payment Methods',
      icon: '💳',
      description: 'Manage payment options',
      action: () => {}
    },
    {
      id: 5,
      title: 'Amazon Pay',
      icon: '💰',
      description: 'View balance & transactions',
      action: () => navigate('/wallet')
    },
    {
      id: 6,
      title: 'Customer Service',
      icon: '🎧',
      description: 'Get help with your orders',
      action: () => navigate('/chatbot')
    },
    {
      id: 7,
      title: 'Settings',
      icon: '⚙️',
      description: 'Account settings & preferences',
      action: () => {}
    }
  ];

  return (
    <div className="profile-page">
      <Header />

      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="profile-info">
            <h2>{user?.name || 'User'}</h2>
            <p>{user?.email || 'user@example.com'}</p>
          </div>
        </div>

        {orders.length > 0 && (
          <div className="recent-orders-section">
            <div className="section-header">
              <h3>Recent Orders</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="recent-orders">
              {orders.slice(0, 3).map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-card-header">
                    <span className="order-id">{order.id}</span>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-card-body">
                    <p className="order-items">
                      {order.items.length} item(s)
                    </p>
                    <p className="order-total">
                      ₹{order.total.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="order-preview">
                    {order.items.slice(0, 3).map((item, index) => (
                      <div key={index} className="order-preview-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="order-preview-more">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="profile-menu">
          <h3>Your Account</h3>
          <div className="menu-list">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="menu-item"
                onClick={item.action}
              >
                <div className="menu-icon">{item.icon}</div>
                <div className="menu-details">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <svg
                  className="menu-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

        <div className="profile-actions">
          <button className="logout-btn" onClick={handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            Logout
          </button>
        </div>

        <div className="profile-footer">
          <p className="app-version">Amazon MVP v1.0.0</p>
          <p className="demo-badge">🎯 Demo Mode</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
