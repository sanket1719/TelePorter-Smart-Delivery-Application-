import { useState } from "react";
import "./login.css";
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaLock, FaDocker, FaLockOpen } from "react-icons/fa";

const VendorLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    digiLockerId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="container">

      <div className='meg_text'>
                <h1>Experience </h1>
                <h2>one click delivery !!!</h2>

                <p> from any where any time  through

                </p>
                <h2>TELEPORTER...</h2>
            </div>
      <div className="card">

        <form onSubmit={handleSubmit} className="form">
        <h1 className='header'>Vendor Login</h1>

          <div className="content">
          <div className="formGroup">
            <label className="label">
              <FaUser className="icon" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaBuilding className="icon" /> Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Company Name"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaPhone className="icon" /> Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Mobile number"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaEnvelope className="icon" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Email Address"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaDocker className="icon" /> Digi Locker ID
            </label>
            <input
              type="text"
              name="digiLockerId"
              value={formData.digiLockerId}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Digi Locker details"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaLock className="icon" /> Enter Password
            </label>
            <input
              type="text"
              name="digiLockerId"
              value={formData.digiLockerId}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Digi Locker details"
              required
            />
          </div>
          <div className="formGroup">
            <label className="label">
              <FaLockOpen className="icon" /> Re-enter Password
            </label>
            <input
              type="text"
              name="digiLockerId"
              value={formData.digiLockerId}
              onChange={handleChange}
              className="input"
              placeholder="Enter your Digi Locker details"
              required
            />
          </div>
          </div>

            <button type="submit" className="button1">
              Submit
            </button>
            <button type="clear" className="button2">
              Clear
            </button>

        </form>
        <div className="signUpContainer">
          <p className="signUpText">
            Dont have an account?{" "}
            <button
              className="signUpButton"
              onClick={() => console.log("Sign Up clicked")}
            >
              Sign Up
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default VendorLogin;