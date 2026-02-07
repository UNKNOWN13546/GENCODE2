import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    navigate('/address');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="cart-content">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Amazon Cart is empty</h2>
            <p>Add items to your cart to get started</p>
            <button className="shop-now-btn" onClick={() => navigate('/home')}>
              Shop now
            </button>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />

      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span className="cart-count">{cartItems.length} item(s)</span>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>

                <div className="cart-item-price">
                  <span className="price-symbol">₹</span>
                  <span className="price-value">{item.price.toLocaleString('en-IN')}</span>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-selector">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={item.quantity >= 10}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
            <span className="summary-price">₹{getCartTotal().toLocaleString('en-IN')}</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>

          <p className="delivery-info">
            🚚 Free delivery on orders above ₹499
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
