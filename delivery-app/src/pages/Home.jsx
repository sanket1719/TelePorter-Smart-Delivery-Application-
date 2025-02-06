import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="fpbody">
            <div className="fpheader">
                <a href="/">Teleporter</a>
                <div>
                    <a className="fpa" href="/help">Help</a>
                    <span> | </span>
                    <a className="fpa" href="/profile">Profile</a>
                </div>
            </div>
            <hr />
            <div className="fpcontainer">
                <h1 className="fph1">Welcome to Intercity Delivery Partners</h1>
                <div className="fpbuttons">
                    <button className="fpbutton" onClick={() => navigate("/vendorRegister")}>
                        For Vendors
                    </button>
                    <button className="fpbutton" onClick={() => navigate("/deliveryPersonRegister")}>
                        For Delivery
                    </button>
                </div>
                <div className="fpfooter">Deliver your stuff Fast and Cheap</div>
            </div>
        </div>
    );
};

export default Home;
