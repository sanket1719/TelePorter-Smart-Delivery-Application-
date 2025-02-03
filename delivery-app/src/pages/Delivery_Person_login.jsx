import './Delivery_Person_login.css';
// import user_icon from '../Images/name-icon.jpg';
// import phone_icon from '../Images/phone-icon.jpg';
import email_icon from '../shared/Images/email-icon.jpg';
import dglocker_icon from '../shared/Images/dglocker-icon.png';

const DeliveryPersonLogin = () => {
    return (

        <div className='container'>
            <div className='header'>

            </div>
            <div className='meg_text'>
                <h1>On the way to </h1>
                <h2>Something !!!</h2>

                <p> Earn money by fufilling
                    delivery orders on the way !
                </p>
            </div>
            <div className='form'>
            <div className='text'>Sign Up As Delivery Personal</div>
            <div className='underline'></div>
            <div className='inputs'>
                <div className='input'>
                    <img className='img' /*src={user_icon}*/ alt='User Icon' />
                    <input className='input' type='text' placeholder='Enter your name' />
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img className='img' /*src={phone_icon}*/ alt='Phone Icon' />
                    <input className='input' type='number' placeholder='Enter your phone number' />
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img className='img' src={email_icon} alt='Email Icon' />
                    <input className='input' type='email' placeholder='Enter your email' />
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img className='img' src={dglocker_icon} alt='Dglocker Icon' />
                    <input className='input' type='text' placeholder='Enter your DigiLocker ID' />
                </div>
            </div>
            <div className='buttons'>

             <button type='submit' className='btn1'>Submit</button>
             <button type='reset' onClick='click' className='btn2' >Clear</button>


            </div>
            <div>
                <p className='alt'>Already have an account ?<a href=''> login</a></p>
            </div>
            </div>



        </div>
    );
};

export default DeliveryPersonLogin;
