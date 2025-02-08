// src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPageComp from "../components/FrontPageComp";
import Vendorsingup from "../components/vender_Person_SignUp";
import Helpdesk from "../components/Helpdesk";

import Deliverysingup from "../components/Delivery_Person_SignUp";
import Deliveryloginmain from "../components/Delivery_PersonLoginmain";
import Vendorloginmain from "../components/vendorloginmain";
import Vendordashboard from "../components/VenderDashboard";
import VendorNewDelivery from "../components/VenderDisplay";
import Deliverypersondashboard from "../components/DeliveryPerson";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      {/* <Navbar /> Navigation bar available on all pages */}
      <Routes>
        <Route path="/" element={<FrontPageComp/>} /> 
        <Route path="/vendorsingup" element={<Vendorsingup/>} />
        <Route path="/deliverysingup" element={<Deliverysingup/>} />
        <Route path="/deliveryloginmain" element={<Deliveryloginmain/>} />
        <Route path="/vendorloginmain" element={<Vendorloginmain/>} />
        <Route path="/vendordashboard" element={<Vendordashboard/>} />
        <Route path="/vendornewdelivery" element={<VendorNewDelivery/>} />
        <Route path="/deliverypersondashboard" element={<Deliverypersondashboard />} />
        <Route path="/helpdesk" element={<Helpdesk/>} />
        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
