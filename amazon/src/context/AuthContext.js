import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    const authToken = localStorage.getItem('authToken');

    if (storedUser && authToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve) => {
      // Simulate loading
      setTimeout(() => {
        // Mock authentication - accept any email/password
        const userData = {
          email,
          name: email.split('@')[0],
          id: Date.now()
        };

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', 'mock-token-' + Date.now());

        setUser(userData);
        setIsAuthenticated(true);
        resolve({ success: true, user: userData });
      }, 1500);
    });
  };

  const signup = (email, password, name) => {
    return new Promise((resolve) => {
      // Simulate loading
      setTimeout(() => {
        // Mock signup - accept any credentials
        const userData = {
          email,
          name: name || email.split('@')[0],
          id: Date.now()
        };

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', 'mock-token-' + Date.now());

        setUser(userData);
        setIsAuthenticated(true);
        resolve({ success: true, user: userData });
      }, 1500);
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    localStorage.removeItem('cart');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
