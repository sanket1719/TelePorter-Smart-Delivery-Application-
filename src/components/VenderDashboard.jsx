import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import { useNavigate } from "react-router-dom";

const VendorDashboard = () => {
    const navigate = useNavigate();
    
    const handleVendorNewDelivery = () => {
        navigate("/vendornewdelivery");
    };

    // Load deliveries from localStorage
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        const savedDeliveries = JSON.parse(localStorage.getItem('deliveries')) || [];
        setDeliveries(savedDeliveries);
    }, []);

    const markAsCompleted = (id) => {
        const updatedDeliveries = deliveries.map((delivery) =>
            delivery.id === id ? { ...delivery, status: "Completed" } : delivery
        );
        setDeliveries(updatedDeliveries);
        localStorage.setItem('deliveries', JSON.stringify(updatedDeliveries));
    };

    const deleteDelivery = (id) => {
        const updatedDeliveries = deliveries.filter((delivery) => delivery.id !== id);
        setDeliveries(updatedDeliveries);
        localStorage.setItem('deliveries', JSON.stringify(updatedDeliveries));
    };

    // Editing State
    const [editingDelivery, setEditingDelivery] = useState(null);
    const [editedDelivery, setEditedDelivery] = useState({});

    const startEditing = (delivery) => {
        setEditingDelivery(delivery.id);
        setEditedDelivery(delivery);
    };

    const handleEditChange = (e) => {
        setEditedDelivery({ ...editedDelivery, [e.target.name]: e.target.value });
    };

    const saveEdit = (id) => {
        const updatedDeliveries = deliveries.map((delivery) =>
            delivery.id === id ? editedDelivery : delivery
        );
        setDeliveries(updatedDeliveries);
        localStorage.setItem('deliveries', JSON.stringify(updatedDeliveries));
        setEditingDelivery(null);
    };

    return (
        <div className="vddbody">
            <div className="vddheader">
                <a className="vdda">Teleporter</a>
                <div>
                    <a className="vdda" href="#">Help</a>
                    <a> | </a>
                    <a className="vdda" href="#">Profile</a>
                </div>
            </div>
            <hr color="white" />
            <div className="vdddashboard-container">
                <h2>Vendor Dashboard</h2>

                <div className="vdddelivery-list">
                    <h3>Ongoing Deliveries</h3>
                    {deliveries.length === 0 ? (
                        <p className="vddempty-text">No ongoing deliveries</p>
                    ) : (
                        deliveries.map((delivery) => (
                            <div key={delivery.id} className="vdddelivery-item">
                                {editingDelivery === delivery.id ? (
                                    <>
                                        <input type="text" name="name" value={editedDelivery.name} onChange={handleEditChange} />
                                        <input type="text" name="status" value={editedDelivery.status} onChange={handleEditChange} />
                                        <input type="text" name="pickup" value={editedDelivery.pickup} onChange={handleEditChange} />
                                        <input type="text" name="drop" value={editedDelivery.drop} onChange={handleEditChange} />
                                        <button onClick={() => saveEdit(delivery.id)}>✅ Save</button>
                                        <button onClick={() => setEditingDelivery(null)}>❌ Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            {delivery.name} - {delivery.status} - Pickup: {delivery.pickup} - Drop: {delivery.drop}
                                        </span>
                                        <div>
                                            {delivery.status === "Ongoing" && (
                                                <button className="vddcomplete-btn" onClick={() => markAsCompleted(delivery.id)}>
                                                    ✅ Complete
                                                </button>
                                            )}
                                            <button className="vddedit-btn" onClick={() => startEditing(delivery)}>✏️ Edit</button>
                                            <button className="vdddelete-btn" onClick={() => deleteDelivery(delivery.id)}>🗑️ Delete</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>

                <div className="vddbutton-group">
                    <button className="vddprimary-btn" onClick={handleVendorNewDelivery}>Create New Delivery</button>
                    <button className="vddsecondary-btn">History</button>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;
