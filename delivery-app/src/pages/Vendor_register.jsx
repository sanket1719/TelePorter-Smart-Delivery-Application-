import { useState } from "react";
import "./Home.css";
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa";
import { registerVendor } from "../services/api";

const VendorRegister = () => {
  const [vendorData, setvendorData] = useState({
    name: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    digiLockerId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvendorData({
      ...vendorData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerVendor(vendorData);
      console.log("Vendor registered successfully:", response);
    } catch (error) {
      console.error("Error registering vendor:", error);
    }
  };

  const handleReset = () => {
    setvendorData({
      name: "",
      companyName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      digiLockerId: "",
    });
  };

  return (
    <div className="vlbody">
      <div className="vlcontainer">
        <div className="vltext">
          EXPERIENCE
          <br />
          One-click Delivery
          <br />
          options through
          <br />
          TELEPORTER!!
        </div>
        <div className="vlcard">
          <form onSubmit={handleSubmit} className="vlform">
            <h1 className="vlheading"> Vendor Registration Page</h1>

            <div className="vlformGroup">
              <label className="vllabel">
                <FaUser className="vlicon" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={vendorData.name}
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
                value={vendorData.companyName}
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
                value={vendorData.mobileNumber}
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
                value={vendorData.email}
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
                value={vendorData.password}
                onChange={handleChange}
                className="vlinput"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="vlformGroup">
              <label className="vllabel">
                <FaLockOpen className="vlicon" /> Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={vendorData.confirmPassword}
                onChange={handleChange}
                className="vlinput"
                placeholder="Re-enter your password"
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
                value={vendorData.digiLockerId}
                onChange={handleChange}
                className="vlinput"
                placeholder="Enter your Digi Locker ID"
                required
              />
            </div>

            <div className="vlbuttonContainer">
              <button type="submit" className="vlbutton">
                Submit
              </button>
              <button type="button" className="vlbutton" onClick={handleReset}>
                Clear
              </button>
            </div>
          </form>

          <div className="vlsignUpContainer">
            <p className="vlsignUpText">
              Already have an account?{" "}
              <button
                className="vlsignUpButton"
                onClick={() => console.log("Sign Up clicked")}
              >
                login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
