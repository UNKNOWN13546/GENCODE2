import React from 'react';
import './Loader.css';

const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loader-message">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
