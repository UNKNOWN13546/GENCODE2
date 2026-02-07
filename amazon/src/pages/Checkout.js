import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Loader from '../components/Loader';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  useEffect(() => {
    // Load address from localStorage
    const savedAddress = localStorage.getItem('deliveryAddress');
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    } else {
      // If no address, redirect to address page
      navigate('/address');
    }

    // If cart is empty, redirect to cart
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [navigate, cartItems]);

  const handlePlaceOrder = () => {
    setLoading(true);

    // Simulate order placement
    setTimeout(() => {
      // Create order object
      const order = {
        id: 'ORD' + Date.now(),
        items: cartItems,
        total: getCartTotal(),
        address: address,
        paymentMethod: paymentMethod,
        date: new Date().toISOString(),
        status: 'Confirmed'
      };

      // Save order to localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.unshift(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));

      // Clear cart
      clearCart();

      setLoading(false);

      // Navigate to order success page
      navigate('/order-success', { state: { order } });
    }, 2000);
  };

  if (!address) {
    return null;
  }

  const subtotal = getCartTotal();
  const deliveryFee = subtotal >= 499 ? 0 : 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="checkout-page">
      {loading && <Loader message="Placing your order..." />}
      <Header />

      <div className="checkout-content">
        <h2 className="checkout-title">Review Your Order</h2>

        {/* Delivery Address */}
        <div className="checkout-section">
          <div className="section-header">
            <h3>Delivery Address</h3>
            <button
              className="change-btn"
              onClick={() => navigate('/address')}
            >
              Change
            </button>
          </div>
          <div className="address-card">
            <p className="address-name">{address.fullName}</p>
            <p className="address-text">
              {address.houseNo}, {address.area}
              {address.landmark && `, ${address.landmark}`}
            </p>
            <p className="address-text">
              {address.city}, {address.state} - {address.pincode}
            </p>
            <p className="address-phone">Phone: {address.mobileNumber}</p>
          </div>
        </div>

        {/* Order Items */}
        <div className="checkout-section">
          <div className="section-header">
            <h3>Order Items ({cartItems.length})</h3>
          </div>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="order-item-details">
                  <h4>{item.name}</h4>
                  <p className="order-item-price">
                    ₹{item.price.toLocaleString('en-IN')} × {item.quantity}
                  </p>
                </div>
                <div className="order-item-total">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="checkout-section">
          <div className="section-header">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-methods">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="payment-info">
                <span className="payment-name">Cash on Delivery</span>
                <span className="payment-desc">Pay when you receive</span>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="payment-info">
                <span className="payment-name">UPI / QR</span>
                <span className="payment-desc">PhonePe, Google Pay, BHIM</span>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="payment-info">
                <span className="payment-name">Credit / Debit Card</span>
                <span className="payment-desc">Visa, MasterCard, RuPay</span>
              </div>
            </label>
          </div>
        </div>

        {/* Price Summary */}
        <div className="checkout-section price-summary">
          <h3>Price Details</h3>
          <div className="price-row">
            <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="price-row">
            <span>Delivery Fee</span>
            <span className={deliveryFee === 0 ? 'free-delivery' : ''}>
              {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
            </span>
          </div>
          {deliveryFee === 0 && (
            <p className="delivery-message">
              🎉 You saved ₹40 on delivery!
            </p>
          )}
          <div className="price-row total-row">
            <span>Total Amount</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>

        <p className="checkout-note">
          By placing your order, you agree to Amazon's{' '}
          <a href="#" className="link">privacy notice</a> and{' '}
          <a href="#" className="link">conditions of use</a>.
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Checkout;
