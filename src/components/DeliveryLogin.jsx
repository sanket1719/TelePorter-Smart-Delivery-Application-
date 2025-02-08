import React, { useState } from 'react';
import './FrontPage.css';
import user_icon from '../shared/images/user-icon.png';
import phone_icon from '../shared/images/phone-icon.png';
import email_icon from '../shared/images/email-icon.jpg';
import dglocker_icon from '../shared/images/dglocker-icon.png';
import password_icon from '../shared/images/pass.jpg';
import { useNavigate } from "react-router-dom";

const DeliveryPersonLogin = () => {
    const navigate = useNavigate();
    const handleVendorsignup = () => {
        navigate("/deliverylogin");  // Redirected to  Vendor singup page
      };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        dgLockerId: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClear = () => {
        setFormData({ name: '', phone: '', email: '', dgLockerId: '', password: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className='dpsbody'>
            <div className='dpscontainer'>
                <div className='dpsheader'></div>

                <div className='dpsmeg_text'>
                    <h1>On the way to</h1>
                    <h2>Something !!!</h2>
                    <p>Earn money by fulfilling delivery orders on the way!</p>
                </div>

                <form className='dpsform' onSubmit={handleSubmit}>
                    <div className='dpstext'>Login As Delivery Personal</div>
                    <div className='dpsunderline'></div>

                    <div className='dpsinputs'>
                        <div className='dpsinput'>
                            <img className='dpsimg' src={user_icon} alt='User Icon' />
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter your name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='dpsinputs'>
                        <div className='dpsinput'>
                            <img className='dpsimg' src={phone_icon} alt='Phone Icon' />
                            <input
                                type='number'
                                name='phone'
                                placeholder='Enter your phone number'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='dpsinputs'>
                        <div className='dpsinput'>
                            <img className='dpsimg' src={email_icon} alt='Email Icon' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='dpsinputs'>
                        <div className='dpsinput'>
                            <img className='dpsimg' src={dglocker_icon} alt='Dglocker Icon' />
                            <input
                                type='text'
                                name='dgLockerId'
                                placeholder='Enter your DigiLocker ID'
                                value={formData.dgLockerId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='dpsinputs'>
                        <div className='dpsinput'>
                            <img className='dpsimg' src={password_icon} alt='Password Icon' />
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter your Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='dpsbuttons'>
                        <button type='submit' className='dpsbtn1'>Submit</button>
                        <button type='button' onClick={handleClear} className='dpsbtn2'>Clear</button>
                    </div>

                    <p className='dpsalt'>
                        Don't have an account?
                    </p>
                    <button onClick={handleVendorsignup}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryPersonLogin;
