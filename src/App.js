import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import * as authService from './utility/auth';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import Expenses from './pages/Expenses/Expenses';
import './App.css';

function App() {

  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className="App">
      <Routes>
        {user && localStorage.getItem("token") ? (
          <>
            <Route path="/onboarding" element={<Onboarding user={user}/>} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/expenses" element={<Expenses user={user} />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Landing user={user} />} />
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;