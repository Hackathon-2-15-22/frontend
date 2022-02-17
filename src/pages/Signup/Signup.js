import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import signup from '../../images/signup.svg';

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <LandingNavbar/>
      <main class="column">
        <h1 className='logo'>Welcome to ea<span>$</span>e</h1>
        <img src={signup} alt="ease logo"/>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </main>
    </>
  )
}

export default Signup;
