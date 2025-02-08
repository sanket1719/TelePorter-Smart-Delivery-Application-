import React, { useState } from "react";
import "./FrontPage.css";

const DeliveryPage = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [orders, setOrders] = useState([
    { id: 1, pickup: "Location A", drop: "Location X", accepted: false },
    { id: 2, pickup: "Location B", drop: "Location Y", accepted: false },
    { id: 3, pickup: "Location C", drop: "Location Z", accepted: false },
  ]);

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const searchOrders = () => {
    if (!pickup && !drop) {
      setFilteredOrders(orders); 
      return;
    }
    setFilteredOrders(
      orders.filter(
        (order) =>
          order.pickup.includes(pickup) && order.drop.includes(drop)
      )
    );
  };

  const acceptOrder = (id) => {
    setFilteredOrders(
      filteredOrders.map((order) =>
        order.id === id ? { ...order, accepted: true } : order
      )
    );
  };

  return (
    <div className="dpbody">
    <div className="dpcontainer">
      <header className="dpheader">
        <div className="dptitle">Teleporter</div>
        <div className="dpnav">
          <a>Help</a> | <span>Profile</span>
        </div>
      </header>
      <hr></hr>
      <div className="dpinput-section">
        <input
          type="text"
          placeholder="Enter Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />
        <button className="dpsearch-btn" onClick={searchOrders}>
          Search Delivery
        </button>
      </div>

      <div className="dporders-container">
        {filteredOrders.map((order) => (
          <div className="dporder-card" key={order.id}>
            <p><strong>Pick Up:</strong> {order.pickup}</p>
            <p><strong>Drop:</strong> {order.drop}</p>
            <button
              className={`dpaccept-btn ${order.accepted ? "dpaccepted" : ""}`}
              onClick={() => acceptOrder(order.id)}
              disabled={order.accepted}
            >
              {order.accepted ? "Accepted" : "Accept"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DeliveryPage;