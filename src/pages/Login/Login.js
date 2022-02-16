import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
      <LandingNavbar/>
      <h1 className="text-center">Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  )
}

export default LoginPage