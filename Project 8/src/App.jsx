import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      dob: "",
      gender: "",
      mobile: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            🇮🇳
          </div>

          <div>
            <h1>Smart PAN Card Portal</h1>
            <p>Online PAN Registration System</p>
          </div>
        </div>

        <span className="secure">🔒 Secure Portal</span>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <button>Home</button>
        <button>New PAN</button>
        <button>Track Application</button>
        <button>Help</button>
      </nav>

      {/* Main */}
      <main className="container">

        <div className="page-title">
          <h2>Smart PAN Card Registration</h2>
          <p>
            Fill in your basic details to submit a demo PAN registration
            application.
          </p>
        </div>

        {/* Progress */}
        <div className="progress">
          <div className="step active">
            <span>1</span>
            <p>Personal Details</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <span>2</span>
            <p>Contact Details</p>
          </div>

          <div className="line"></div>

          <div className="step">
            <span>3</span>
            <p>Confirmation</p>
          </div>
        </div>

        {submitted ? (
          <div className="success-card">
            <div className="success-icon">✓</div>

            <h2>Application Submitted!</h2>

            <p>
              Your demo PAN registration request has been submitted
              successfully.
            </p>

            <div className="application-number">
              <span>Application ID</span>
              <strong>PAN-DEMO-2026-001</strong>
            </div>

            <button className="primary-btn" onClick={resetForm}>
              Submit Another Application
            </button>
          </div>
        ) : (
          <form className="form-card" onSubmit={handleSubmit}>

            {/* Personal Details */}
            <div className="form-section">
              <div className="section-heading">
                <span>👤</span>
                <div>
                  <h3>Personal Details</h3>
                  <p>Enter your basic information</p>
                </div>
              </div>

              <div className="form-grid">

                <div className="input-group full">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Contact Details */}
            <div className="form-section">
              <div className="section-heading">
                <span>📱</span>
                <div>
                  <h3>Contact Details</h3>
                  <p>Enter your contact information</p>
                </div>
              </div>

              <div className="form-grid">

                <div className="input-group">
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    maxLength="10"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                  />
                </div>

              </div>
            </div>

            {/* Address */}
            <div className="form-section">
              <div className="section-heading">
                <span>📍</span>
                <div>
                  <h3>Address Details</h3>
                  <p>Enter your residential address</p>
                </div>
              </div>

              <div className="form-grid">

                <div className="input-group full">
                  <label>Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="input-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select state</option>
                    <option>Tamil Nadu</option>
                    <option>Puducherry</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter PIN code"
                    maxLength="6"
                    required
                  />
                </div>

              </div>
            </div>

            {/* Declaration */}
            <div className="declaration">
              <input type="checkbox" required />

              <p>
                I confirm that the information entered in this demo
                application is correct and complete.
              </p>
            </div>

            <div className="button-area">
              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
              >
                Clear
              </button>

              <button type="submit" className="primary-btn">
                Submit Application →
              </button>
            </div>

          </form>
        )}

      </main>

      {/* Footer */}
      <footer>
        <h3>Smart PAN Card Portal</h3>
        <p>
          This is an educational React project and is not an official
          government application.
        </p>
        <small>© 2026 Smart PAN Card Portal</small>
      </footer>

    </div>
  );
}

export default App;