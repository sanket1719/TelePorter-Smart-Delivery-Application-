import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import VendorLogin from '../pages/Vendor_login';
import DeliveryPersonLogin from '../pages/Delivery_Person_login';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/vendorLogin' element={<VendorLogin/>}/>
            <Route path='/deliveryPersonLogin' element={<DeliveryPersonLogin/>}/>
        </Routes>
    );
};
export default AppRoutes;