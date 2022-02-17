import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import welcome from '../images/welcome.svg';

const Signup = (props) => {
  const [message, setMessage] = useState([""]);

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <main class="column">
        <h1 className='title'>Welcome to ea<span>$</span>e</h1>
        <img src={welcome} alt="ease logo"/>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </main>
    </>
  )
}

export default Signup;
