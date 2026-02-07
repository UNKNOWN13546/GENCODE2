import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import './Address.css';

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pincode: '',
    houseNo: '',
    area: '',
    landmark: '',
    city: '',
    state: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    if (!formData.houseNo.trim()) {
      newErrors.houseNo = 'House/Flat number is required';
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Area/Street is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save address to localStorage
      localStorage.setItem('deliveryAddress', JSON.stringify(formData));
      // Navigate to checkout
      navigate('/checkout');
    }
  };

  const handleBack = () => {
    navigate('/cart');
  };

  return (
    <div className="address-page">
      <Header />

      <div className="address-content">
        <div className="address-header">
          <button className="back-button" onClick={handleBack}>
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
          <h2>Add Delivery Address</h2>
        </div>

        <form onSubmit={handleSubmit} className="address-form">
          <div className="form-section">
            <h3 className="section-title">Contact Details</h3>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                className={`form-input ${errors.mobileNumber ? 'error' : ''}`}
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                maxLength="10"
              />
              {errors.mobileNumber && (
                <span className="error-message">{errors.mobileNumber}</span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">Address Details</h3>

            <div className="form-group">
              <label htmlFor="pincode" className="form-label">
                Pincode *
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className={`form-input ${errors.pincode ? 'error' : ''}`}
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit pincode"
                maxLength="6"
              />
              {errors.pincode && (
                <span className="error-message">{errors.pincode}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="houseNo" className="form-label">
                Flat, House no., Building, Company *
              </label>
              <input
                type="text"
                id="houseNo"
                name="houseNo"
                className={`form-input ${errors.houseNo ? 'error' : ''}`}
                value={formData.houseNo}
                onChange={handleChange}
                placeholder="Enter your house/flat number"
              />
              {errors.houseNo && (
                <span className="error-message">{errors.houseNo}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="area" className="form-label">
                Area, Street, Sector, Village *
              </label>
              <input
                type="text"
                id="area"
                name="area"
                className={`form-input ${errors.area ? 'error' : ''}`}
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter your area/street"
              />
              {errors.area && (
                <span className="error-message">{errors.area}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="landmark" className="form-label">
                Landmark (Optional)
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                className="form-input"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="E.g. near hospital"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="state" className="form-label">
                  State *
                </label>
                <select
                  id="state"
                  name="state"
                  className={`form-input ${errors.state ? 'error' : ''}`}
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Delhi">Delhi</option>
                </select>
                {errors.state && (
                  <span className="error-message">{errors.state}</span>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Use this address
          </button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
};

export default Address;
