import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import VendorRegister from '../pages/Vendor_register';
import DeliveryPersonRegister from '../pages/Delivery_Person_register';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/vendorRegister' element={<VendorRegister/>}/>
            <Route path='/deliveryPersonRegister' element={<DeliveryPersonRegister/>}/>
        </Routes>
    );
};
export default AppRoutes;