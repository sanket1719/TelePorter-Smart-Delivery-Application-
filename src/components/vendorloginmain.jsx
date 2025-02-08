import React, { useState } from "react";
import "./FrontPage.css";
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaLock , FaLockOpen} from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
      const navigate = useNavigate();
            const handleVendorsingup = () => {
                navigate("/vendorsingup");  // Redirected to Vendor signup page
              };
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    password: "",
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
    
    // Check if credentials match
    if (
      formData.mobileNumber === "8618858967" &&
      formData.email === "prithvirajdesai14@gmail.com" &&
      formData.password === "prithvi123"
    ) {
      navigate("/vendordashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="vlbody">
    <div className="vlcontainer">
      <div className="vltext">
        EXPERIANCE
        <br />
        One click Delivery
        <br />
        options through
        <br />
        TELEPORTER!!
      </div>
      <div className="vlcard">
        
        <form onSubmit={handleSubmit} className="vlform">
          <div className="vlformGroup">
            <label className="vllabel">
              <FaPhone className="vlicon" /> Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Mobile number"
              required
            />
          </div>
          <div className="vlformGroup">
            <label className="vllabel">
              <FaEnvelope className="vlicon" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Email Address"
              required
            />
          </div>
          <div className="vlformGroup">
            <label className="vllabel">
              <FaLock className="vlicon" /> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="vlbuttonContainer">
            <button type="submit" className="vlbutton">
              Submit
            </button>
          </div>
          <div className="buttonContainer">
            <button type="button" className="vlbutton" onClick={() => setFormData({ name: "", companyName: "", mobileNumber: "", email: "", password: "", digiLockerId: "" })}>
              Clear
            </button>
          </div>
        </form>
        <div className="vlsignUpContainer">
          <p className="vlsignUpText">
            Don't have an account?{" "}
            <button
              className="vlsignUpButton"
              onClick={ handleVendorsingup }
            >
              Sign Up
            </button>
          </p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
