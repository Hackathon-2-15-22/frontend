import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import signup from '../../images/signup.svg';

const LoginPage = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <LandingNavbar/>
      <main className='column'>
        <h1 className='logo'>Welcome to ea<span>$</span>e</h1>
        <img src={signup} alt="ease logo"/>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </main>
    </>
  )
}

export default LoginPage;
