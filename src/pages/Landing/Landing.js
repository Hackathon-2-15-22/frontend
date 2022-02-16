import { Link } from 'react-router-dom';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const Landing = props => {

  return (
    <main>
      <LandingNavbar/>
      <div className="hero">
        <h1>Handle Your <br />Funds with Ease.</h1>
        <Link to="/signup">
          <button className="center">Sign up for free</button>
        </Link>
      </div>
      <div className="landing">
        <div className="block">
          <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2>Track</h2>
          <p>Keep track of your expenses using our built-in budgeting feature and see where you can adjust spending patterns.</p>
        </div>
        <div className="block">
          <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2>Set Goals</h2>
          <p>Whether you're working towards a new gaming system, a vacation, or paying off credit card debt, writing down your goals will help keep you motivated.</p>
        </div>
        <div className="block">
          <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2>Save</h2>
          <p>Nearly 40% of adults have less than $1,000 saved for financial emergencies. Create a safety net to prepare for unexpected expenses.</p>
        </div>
        <div className="block">
          <Link to="/signup">
            <button>Sign up for free</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Landing