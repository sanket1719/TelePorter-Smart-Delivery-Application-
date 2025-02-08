
import React, { useState } from "react";
import "./FrontPage.css";
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaLock , FaLockOpen} from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const VendorSignUp = () => {
   const navigate = useNavigate();
      const handleVendorlogin = () => {
          navigate("/vendorloginmain");  // Redirected to  Vendor singup page
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
    // Add your form submission logic here
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
          <h1 className="vlheading"> Vendor Sign Up Page</h1>
            <label className="vllabel">
              <FaUser className="vlicon" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="vlformGroup">
            <label className="vllabel">
              <FaBuilding className="vlicon" /> Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Company Name"
              required
            />
          </div>
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
              <FaLock className="vlicon" /> Enter Password
            </label>
            <input
              type="text"
              name="digiLockerId"
              value={formData.password}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Digi Locker details"
              required
            />
          </div>
          <div className="vlformGroup">
            <label className="vllabel">
              <FaLock className="vlicon" /> Digi Locker ID
            </label>
            <input
              type="text"
              name="digiLockerId"
              value={formData.digiLockerId}
              onChange={handleChange}
              className="vlinput"
              placeholder="Enter your Digi Locker details"
              required
            />
          </div>
          <div className="vlbuttonContainer">
            <button type="submit" className="vlbutton">
              Submit
            </button>
          </div>
          <div className="buttonContainer">
            <button type="clear" className="vlbutton">
              Clear
            </button>
          </div>
        </form>
        <div className="vlsignUpContainer">
          <p className="vlsignUpText">
            Already have an account?{" "}
            <button
              className="vlsignUpButton"
              onClick={ handleVendorlogin}
            >
              Login
            </button>
          </p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default VendorSignUp;