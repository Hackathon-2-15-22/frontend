import { Link } from 'react-router-dom';
import landing1 from '../images/landing1.svg'
import landing2 from '../images/landing2.svg'
import landing3 from '../images/landing3.svg'

const Landing = props => {

  return (
    <main>
      <div className="hero">
        <h1 className='text-center'>Handle Your <br />Funds with ea<span className='cash'>$</span>e.</h1>
        <Link to="/signup">
          <button className="b1">Sign up for free</button>
        </Link>
      </div>
      <div className="landing">
        <div className="block">
          <img src={landing1} alt='notepad'/>
          <h2>Track</h2>
          <p>Keep track of your expenses using our built-in budgeting feature and see where you can adjust spending patterns.</p>
        </div>
        <div className="block">
          <img src={landing2} alt='target'/>
          <h2>Set Goals</h2>
          <p>Whether you're working towards a new gaming system, a vacation, or paying off credit card debt, writing down your goals will help keep you motivated.</p>
        </div>
        <div className="block">
          <img src={landing3} alt='piggybank'/>
          <h2>Save</h2>
          <p>Nearly 40% of adults have less than $1,000 saved for financial emergencies. Create a safety net to prepare for unexpected expenses.</p>
        </div>
        <div className="block">
          <Link to="/signup">
            <button className='b1'>Sign up for free</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Landing