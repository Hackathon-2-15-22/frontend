import './App.scss';
import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import * as authService from './utility/auth';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import GoalForm from './components/GoalForm/GoalForm';
import Expenses from './pages/Expenses/Expenses';


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
    <div>
      <Navbar logout={handleLogout}/>
      <Routes>
        {user && localStorage.getItem("token") ? (
          <>
            <Route path="*" element={<Navigate to="/home" replace/>} />
            <Route path="/onboarding" element={<Onboarding user={user}/>} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/goal" element={<GoalForm user={user} />} />
            <Route path="/expenses" element={<Expenses user={user} />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/" replace/>} />
            <Route path="/" element={<Landing user={user} />} />
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