import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            {/* Header Section */}
            <div className="header">
                <a href="/">Teleporter</a>
                <div>
                    <a href="/help">Help</a>
                    <span> | </span>
                    <a href="/profile">Profile</a>
                </div>
            </div>

            <hr />

            {/* Main Content */}
            <div className="container">
                <h1>Welcome to Intercity Delivery Partners</h1>
                <div className="buttons">
                    <Link to="/vendorLogin" className="button">For Vendors</Link>
                    <Link to="/deliveryPersonLogin" className="button">For Delivery</Link>
                </div>
                <div className="footer">Deliver your stuff Fast and Cheap</div>
            </div>
        </div>
    );
};

export default Home;
