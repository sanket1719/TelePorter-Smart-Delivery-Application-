import React, { useState } from 'react';
import './FrontPage.css';
import { FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DeliveryPersonLogin = () => {
    const navigate = useNavigate();

    const handledeliverysignup = () => {
        navigate("/deliverysignup");
    };

    const [formData, setFormData] = useState({
        mobileNumber: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage(''); // Clear error message when user types
    };

    const handleClear = () => {
        setFormData({ mobileNumber: '', email: '', password: '' });
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Static login credentials
        const validMobile = "8618858967";
        const validEmail = "prithvirajdesai14@gmail.com";
        const validPassword = "prithvi123";

        if (
            formData.mobileNumber === validMobile &&
            formData.email === validEmail &&
            formData.password === validPassword
        ) {
            navigate("/deliverypersondashboard"); // Redirect to dashboard on success
        } else {
            setErrorMessage("❌ Invalid Credentials. Please try again.");
        }
    };

    return (
        <div className="vlbody">
            <div className="vlcontainer">
                <div className="vltext">
                    EXPERIENCE
                    <br />
                    One-click Delivery
                    <br />
                    Options through
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
                        
                        {errorMessage && <p className="vlerror">{errorMessage}</p>} {/* Show error message */}

                        <div className="vlbuttonContainer">
                            <button type="submit" className="vlbutton">
                                Login
                            </button>
                            <button type="button" onClick={handleClear} className="vlbutton">
                                Clear
                            </button>
                        </div>
                    </form>

                    <div className="vlsignUpContainer">
                        <p className="vlsignUpText">
                            Don't have an account?{" "}
                            <button className="vlsignUpButton" onClick={handledeliverysignup}>
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPersonLogin;
