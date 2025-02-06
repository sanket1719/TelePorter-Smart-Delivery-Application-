import './Home.css';
import user_icon from '../shared/images/user-icon.png';
import phone_icon from '../shared/images/phone-icon.png';
import email_icon from '../shared/images/email-icon.jpg';
import dglocker_icon from '../shared/images/dglocker-icon.png';

const DeliveryPersonLogin = () => {
    return (
    <div>
        <body className='dplbody'>
        <div className='dplcontainer'>
            <div className='dplheader'>

            </div>
            <div className='dplmeg_text'>
                <h1>On the way to </h1>
                <h2>Something !!!</h2>

                <p> Earn money by fufilling
                    delivery orders on the way !
                </p>
            </div>
            <div className='dplform'>
            <div className='dpltext'>Sign Up As Delivery Personal</div>
            <div className='dplunderline'></div>
            <div className='dplinputs'>
                <div className='dplinput'>
                    <img className='dplimg' src={user_icon} alt='User Icon' />
                    <input className='dplinput' type='text' placeholder='Enter your name' />
                </div>
            </div>
            <div className='dplinputs'>
                <div className='dplinput'>
                    <img className='dplimg' src={phone_icon} alt='Phone Icon' />
                    <input className='dplinput' type='number' placeholder='Enter your phone number' />
                </div>
            </div>
            <div className='dplinputs'>
                <div className='dplinput'>
                    <img className='dplimg' src={email_icon} alt='Email Icon' />
                    <input className='dplinput' type='email' placeholder='Enter your email' />
                </div>
            </div>
            <div className='dplinputs'>
                <div className='dplinput'>
                    <img className='dplimg' src={dglocker_icon} alt='Dglocker Icon' />
                    <input className='dplinput' type='text' placeholder='Enter your DigiLocker ID' />
                </div>
            </div>
            <div className='dplbuttons'>

             <button type='submit' className='dplbtn1'>Submit</button>
             <button type='reset' onClick='click' className='dplbtn2' >Clear</button>


            </div>
            <div>
                <p className='dplalt'>Already have an account ?<a href=''> login</a></p>
            </div>
            </div>
        </div>
        </body>

    </div>
    );
};

export default DeliveryPersonLogin;
