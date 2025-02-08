import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VenderDisplay = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        receiverName: '',
        receiverPhone: '',
        receiverAddress: '',
        productWeight: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Fetch existing deliveries from localStorage
        const existingDeliveries = JSON.parse(localStorage.getItem('deliveries')) || [];

        // Create a new delivery object
        const newDelivery = {
            id: existingDeliveries.length + 1,
            name: `Order #${existingDeliveries.length + 101}`,
            status: "Ongoing",
            pickup: formData.senderAddress,
            drop: formData.receiverAddress,
        };

        // Save the new delivery to localStorage
        const updatedDeliveries = [...existingDeliveries, newDelivery];
        localStorage.setItem('deliveries', JSON.stringify(updatedDeliveries));

        // Redirect to Vendor Dashboard
        navigate("/vendordashboard");
    };

    return (
        <div className='vdbody'>
            <div className="vdheader">
                <a className='vda'>Teleporter</a>
                <div>
                    <a className='vda' href="#">Help</a>
                    <a> | </a>
                    <a className='vda' href="#">Profile</a>
                </div>
            </div>
            <hr />
            <div className="vdcontainer">
                <h2 className='vdh2'>Vendors Display</h2>

                <form className="vdform-container" onSubmit={handleSubmit}>
                    <label className='vdlabel'>Name of Sender</label>
                    <input className='vdinput' type="text" name="senderName" value={formData.senderName} onChange={handleChange} required />

                    <label className='vdlabel'>Phone Number of Sender</label>
                    <input className='vdinput' type="text" name="senderPhone" value={formData.senderPhone} onChange={handleChange} required />

                    <label className='vdlabel'>Address of Sender</label>
                    <input className='vdinput' type="text" name="senderAddress" value={formData.senderAddress} onChange={handleChange} required />

                    <label className='vdlabel'>Name of Receiver</label>
                    <input className='vdinput' type="text" name="receiverName" value={formData.receiverName} onChange={handleChange} required />

                    <label className='vdlabel'>Phone Number of Receiver</label>
                    <input className='vdinput' type="text" name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} required />

                    <label className='vdlabel'>Address of Receiver</label>
                    <input className='vdinput' type="text" name="receiverAddress" value={formData.receiverAddress} onChange={handleChange} required />

                    <label className='vdlabel'>Product Weight (kg)</label>
                    <input className='vdinput' type="text" name="productWeight" value={formData.productWeight} onChange={handleChange} required />

                    <button type="submit" className="vdadd-item">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default VenderDisplay;
