import React from 'react';
import "./FrontPage.css";
import { useNavigate } from "react-router-dom";

const FrontPageComp = () => {
    const navigate = useNavigate();
    const handleVendorSignUP = () => {
        navigate("/vendorloginmain");  // Redirected to  Vendor singup page
      };
      const handleDeliverySignUP = () => {
        navigate("/deliveryloginmain");  // Redirected to  Delivery personal login page
      };
    return (
            <div className='fpbody'>
                <div class="fpheader">
                    <a>Teleporter</a>
                    <div>
                    <a className='fpa' href="helpdesk">Help</a>
                    <a> | </a>
                    <a className='fpa' href="#">Profile</a>
                    </div>
                </div>
                <hr></hr>
                <div class="fpcontainer">
                <h1 className="fph1" >Welcome to Intercity Delivery Partners</h1>
                <div class="fpbuttons">
                    <button onClick={handleVendorSignUP} class="fpbutton">For Vendors</button>
                    <button onClick={handleDeliverySignUP} class="fpbutton">For Delivery</button>
                </div>
                <div class="fpfooter">Deliver your stuff Fast and Cheap</div>
            </div>
        </div>
    )
}
export default FrontPageComp;
