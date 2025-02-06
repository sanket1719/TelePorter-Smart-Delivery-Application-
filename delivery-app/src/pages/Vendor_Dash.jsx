import { useState } from 'react';
import { createDeliveryRequest } from '../services/api';

const VendorDash = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createDeliveryRequest(formData);
    };

    return (
        <body className='vdbody'>
            <div className="vdheader">
                    <a className='vda' >Teleporter</a>
                    <div>
                    <a className='vda' href="#">Help</a>
                    <a> | </a>
                    <a className='vda' href="#">Profile</a>
                    </div>
            </div>
            <hr></hr>
        <div className="vdcontainer">
            <h2 className='vdh2'>Vendors Display</h2>

            <form className="vdform-container" onSubmit={handleSubmit}>
                <label className='vdlabel' >Name of Sender</label>
                <input className='vdinput' type="text" name="senderName" value={formData.senderName} onChange={handleChange} />

                <label className='vdlabel' >Phone Number of Sender</label>
                <input className='vdinput' type="text" name="senderPhone" value={formData.senderPhone} onChange={handleChange} />

                <label className='vdlabel' >Address of Sender</label>
                <input className='vdinput' type="text" name="senderAddress" value={formData.senderAddress} onChange={handleChange} />

                <label className='vdlabel'>Name of Receiver</label>
                <input className='vdinput' type="text" name="receiverName" value={formData.receiverName} onChange={handleChange} />

                <label className='vdlabel'>Phone Number of Receiver</label>
                <input className='vdinput' type="text" name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} />

                <label className='vdlabel'>Address of Receiver</label>
                <input className='vdinput' type="text" name="receiverAddress" value={formData.receiverAddress} onChange={handleChange} />

                <label className='vdlabel'>Product Weight (kg)</label>
                <input className='vdinput' type="text" name="productWeight" value={formData.productWeight} onChange={handleChange} />
                <button type="submit" className="vdadd-item">Add Item</button>
            </form>
        </div>
        </body>
    );
};

export default VendorDash;
