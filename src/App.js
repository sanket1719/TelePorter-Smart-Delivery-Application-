import logo from './logo.svg';
import './App.css';
import Delivery_Person_SignUp from './components/Delivery_Person_SignUp';
import FrontPageComp from './components/FrontPageComp';
import VendorLogin from './components/Vendor_login';
import VendorDisplay from './components/VenderDisplay';
import DeliveryPerson from './components/DeliveryPerson';
import DeliveryLogin from './components/DeliveryLogin'
import VendorDashboard from './components/VenderDashboard';
import VendorSignUp from './components/vender_Person_SignUp';
// import VendorDashboard from './components/tryc';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FrontPageComp></FrontPageComp> */}
      {/* <VendorLogin></VendorLogin> */}
      {/* <VendorDisplay></VendorDisplay> */}
      {/* <DeliveryPerson></DeliveryPerson> */}
      {/* <DeliveryLogin></DeliveryLogin> */}
      {/* <VendorDashboard></VendorDashboard> */}
      {/* <Delivery_Person_SignUp></Delivery_Person_SignUp> */}
      <VendorSignUp></VendorSignUp>

    </div>
  );
}

export default App;
