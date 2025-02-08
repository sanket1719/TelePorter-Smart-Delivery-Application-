import React from "react";
import "./FrontPage.css";

const HelpPage = () => {
  return (
    <div className="hhelp-container">
      <h1 className="hhelp-title">Help Guide for Teleporter </h1>
      <p className="hp">Welcome to Teleporter, your go-to platform for managing deliveries seamlessly. This guide will help you navigate through the different features available for vendors and delivery personnel.</p>
      
      <h2>1. Vendor Guide</h2>
      <h3>1.1 Vendor Login & Sign-up</h3>
      <ul>
        <li>New Vendor? Click on Sign Up to create an account by providing business details, contact information, and a password.</li>
        <li>Returning Vendor? Click Login and enter your registered email and password.</li>
      </ul>
      
      <h3>1.2 Vendor Dashboard Features</h3>
      <ul>
        <li><strong>Create a New Delivery:</strong></li>
        <ul>
          <li>Click the “Create Delivery” button.</li>
          <li>Enter order details, including pickup & drop-off locations, customer information, and delivery time.</li>
          <li>Click Submit to list the delivery.</li>
        </ul>
        <li><strong>Edit Existing Deliveries:</strong></li>
        <ul>
          <li>Navigate to the “Deliveries” section.</li>
          <li>Select an order and click “Edit” to modify delivery details if needed.</li>
          <li>Save the changes.</li>
        </ul>
      </ul>
      
      <h2>2. Delivery Person Guide</h2>
      <h3>2.1 Delivery Person Login & Sign-up</h3>
      <ul>
        <li>New Delivery Person? Click on Sign Up, provide personal details, and upload required documents.</li>
        <li>Existing Delivery Person? Click Login and enter your credentials.</li>
      </ul>
      
      <h3>2.2 Accepting Deliveries</h3>
      <ul>
        <li>Once logged in, go to the “Available Deliveries” section.</li>
        <li>Browse listed deliveries and check details like location, payment, and time.</li>
        <li>Click “Accept” to take a delivery.</li>
        <li>The vendor will be notified that you have taken the order.</li>
      </ul>
      
      
      <p className="hp">Start using Teleporter today for a smooth and efficient delivery experience!</p>
    </div>
  );
};

export default HelpPage;