import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="">
      <LandingNavbar/>
      <h1>Welcome to ea$e</h1>
      <img src="https://picsum.photos/248/144" alt="ease logo" width="248" height="144"/>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup