import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

  useEffect(() => {
    // If no order data, redirect to home
    if (!order) {
      navigate('/home');
    }
  }, [order, navigate]);

  if (!order) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-IN', options);
  };

  return (
    <div className="order-success-page">
      <div className="success-container">
        <div className="success-animation">
          <div className="checkmark-circle">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark-circle-draw"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>

        <h1 className="success-title">Order Placed Successfully!</h1>
        <p className="success-message">
          Thank you for your order. Your order has been confirmed and will be delivered soon.
        </p>

        <div className="order-details-card">
          <div className="order-header">
            <div className="order-id-section">
              <span className="order-label">Order ID</span>
              <span className="order-id">{order.id}</span>
            </div>
            <div className="order-status">
              <span className="status-badge">{order.status}</span>
            </div>
          </div>

          <div className="order-info">
            <div className="info-row">
              <span className="info-label">Order Date:</span>
              <span className="info-value">{formatDate(order.date)}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Total Amount:</span>
              <span className="info-value total-amount">
                ₹{order.total.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Payment Method:</span>
              <span className="info-value">
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' :
                 order.paymentMethod === 'upi' ? 'UPI' : 'Card'}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Items:</span>
              <span className="info-value">{order.items.length} item(s)</span>
            </div>
          </div>

          <div className="delivery-address-section">
            <h3>Delivery Address</h3>
            <div className="address-details">
              <p className="address-name">{order.address.fullName}</p>
              <p className="address-text">
                {order.address.houseNo}, {order.address.area}
              </p>
              <p className="address-text">
                {order.address.city}, {order.address.state} - {order.address.pincode}
              </p>
              <p className="address-phone">📞 {order.address.mobileNumber}</p>
            </div>
          </div>

          <div className="order-items-preview">
            <h3>Items Ordered</h3>
            <div className="items-list">
              {order.items.map((item) => (
                <div key={item.id} className="preview-item">
                  <div className="preview-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="preview-item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="preview-item-price">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="success-actions">
          <button className="primary-btn" onClick={() => navigate('/home')}>
            Continue Shopping
          </button>
          <button className="secondary-btn" onClick={() => navigate('/profile')}>
            View Orders
          </button>
        </div>

        <div className="success-footer">
          <p>🎉 Your order will be delivered in 3-5 business days</p>
          <p>You will receive updates via SMS and Email</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
