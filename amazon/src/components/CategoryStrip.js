import React from 'react';
import './CategoryStrip.css';

const CategoryStrip = ({ onCategorySelect, selectedCategory }) => {
  const categories = [
    { id: 'all', name: 'All', icon: '🏠' },
    { id: 'Pay', name: 'Pay', icon: '💳' },
    { id: 'Fresh', name: 'Fresh', icon: '🥬' },
    { id: 'Bazaar', name: 'Bazaar', icon: '🛍️' },
    { id: 'MX Player', name: 'MX Player', icon: '▶️' },
    { id: 'Pharmacy', name: 'Pharmacy', icon: '💊' },
    { id: 'Electronics', name: 'Electronics', icon: '📱' },
    { id: 'Fashion', name: 'Fashion', icon: '👕' },
    { id: 'Groceries', name: 'Groceries', icon: '🛒' },
    { id: 'Home & Kitchen', name: 'Home', icon: '🏡' }
  ];

  return (
    <div className="category-strip">
      <div className="category-scroll">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStrip;
