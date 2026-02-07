import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import './Wallet.css';

const Wallet = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, type: 'credit', amount: 500, description: 'Cashback from order', date: '2024-02-05' },
    { id: 2, type: 'debit', amount: 299, description: 'Payment for Order #ORD123', date: '2024-02-04' },
    { id: 3, type: 'credit', amount: 1000, description: 'Added to wallet', date: '2024-02-03' }
  ];

  return (
    <div className="wallet-page">
      <Header />

      <div className="wallet-content">
        <div className="wallet-header">
          <button className="back-button" onClick={() => navigate('/profile')}>
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <h2>Amazon Pay</h2>
        </div>

        <div className="wallet-balance-card">
          <div className="balance-icon">💰</div>
          <div className="balance-info">
            <p className="balance-label">Current Balance</p>
            <h1 className="balance-amount">₹1,201</h1>
          </div>
          <button className="add-money-btn">Add Money</button>
        </div>

        <div className="wallet-features">
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <p>UPI Payment</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💳</div>
            <p>Cards</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏦</div>
            <p>Bank Transfer</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <p>Statements</p>
          </div>
        </div>

        <div className="transactions-section">
          <h3>Recent Transactions</h3>
          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className={`transaction-icon ${transaction.type}`}>
                  {transaction.type === 'credit' ? '↓' : '↑'}
                </div>
                <div className="transaction-details">
                  <h4>{transaction.description}</h4>
                  <p>{new Date(transaction.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</p>
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wallet-info">
          <p>🎯 This is a demo wallet page</p>
          <p>Real payment integration is not implemented</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Wallet;
