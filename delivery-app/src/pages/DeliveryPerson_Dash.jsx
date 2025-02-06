import "./Home.css";

const DeliveryPersonDash = () => {
  return (
    <body className='dpbody'>
            <div className="dpheader">
                    <a>Teleporter</a>
                    <div>
                    <a className='dpa' href="#">Help</a>
                    <a> | </a>
                    <a className='dpa' href="#">Profile</a>
                    </div>
            </div>
            <hr></hr>
    <div className="dpcontainer">
      <h1 className="dptitle">Delivery Person</h1>
      <div className="dpsidebar">
        <label className="dph3"> Filter </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your location"
                      className="dpaccept-button"
                    />
      </div>
      <div className="dpproduct-list">
        <div className="dpproduct-card">
          <h3 className="dph3">Product 1</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 2</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 3</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 4</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 1</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 2</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 3</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 4</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 1</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 2</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 3</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
        <div className="dpproduct-card">
          <h3 className="dph3">Product 4</h3>
          <button className="dpaccept-button">view</button>
          <button className="dpaccept-button">Accept</button>
        </div>
      </div>
    </div>
    </body>
  );
};

export default DeliveryPersonDash;
