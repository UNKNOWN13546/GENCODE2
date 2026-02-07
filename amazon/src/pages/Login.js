import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {loading && <Loader message="Logging in..." />}

      <div className="login-container">
        <div className="login-logo">
          <div className="logo-icon">
            <span className="logo-a">a</span>
          </div>
          <span className="logo-text">.in</span>
        </div>

        <div className="login-card">
          <h1 className="login-title">Sign in</h1>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email or mobile phone number
              </label>
              <input
                type="text"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-button" disabled={loading}>
              Sign in
            </button>
          </form>

          <p className="login-terms">
            By continuing, you agree to Amazon's{' '}
            <a href="#" className="terms-link">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="terms-link">
              Privacy Notice
            </a>
            .
          </p>
        </div>

        <div className="login-divider">
          <span>New to Amazon?</span>
        </div>

        <Link to="/signup" className="signup-button">
          Create your Amazon account
        </Link>

        <div className="login-footer">
          <p className="demo-info">
            🎯 <strong>Demo Mode:</strong> Enter any email and password to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
