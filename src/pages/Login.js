import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import welcome from '../images/welcome.svg';

const LoginPage = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <main className='column'>
        <h1 className='title'>Welcome to ea<span>$</span>e</h1>
        <img src={welcome} alt="ease logo"/>
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
