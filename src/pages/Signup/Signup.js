import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <LandingNavbar/>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup