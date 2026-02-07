import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await signup(email, password, name);
      navigate('/home');
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {loading && <Loader message="Creating your account..." />}

      <div className="signup-container">
        <div className="signup-logo">
          <div className="logo-icon">
            <span className="logo-a">a</span>
          </div>
          <span className="logo-text">.in</span>
        </div>

        <div className="signup-card">
          <h1 className="signup-title">Create account</h1>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First and last name"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
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
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Re-enter password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="signup-submit-button" disabled={loading}>
              Create your Amazon account
            </button>
          </form>

          <p className="signup-terms">
            By creating an account, you agree to Amazon's{' '}
            <a href="#" className="terms-link">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="terms-link">
              Privacy Notice
            </a>
            .
          </p>

          <div className="signup-divider"></div>

          <p className="signin-link-text">
            Already have an account?{' '}
            <Link to="/" className="signin-link">
              Sign in
            </Link>
          </p>
        </div>

        <div className="signup-footer">
          <p className="demo-info">
            🎯 <strong>Demo Mode:</strong> Use any email and password to create an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
