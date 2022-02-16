import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';

const Landing = props => {

  return (
    <main className={styles.container}>
      <LandingNavbar/>
      <div className={styles.landingIntro}>
        <h1>Handle Your <br />Funds with Ease.</h1>
        <Link to="/signup">
          <button className={styles.signupButton}>Sign up for free</button>
        </Link>
      </div>
      <div className={styles.landingPageInfo}>
        <div className={styles.featureInfo}>
          <img className={styles.featureImg} src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2 className={styles.featureTitle}>Track</h2>
          <p className={styles.featureDescription}>Keep track of your expenses using our built-in budgeting feature and see where you can adjust spending patterns.</p>
        </div>
        <div className={styles.featureInfo}>
          <img className={styles.featureImg} src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2 className={styles.featureTitle}>Set Goals</h2>
          <p className={styles.featureDescription}>Whether you're working towards a new gaming system, a vacation, or paying off credit card debt, writing down your goals will help keep you motivated.</p>
        </div>
        <div className={styles.featureInfo}>
          <img className={styles.featureImg} src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg" />
          <h2 className={styles.featureTitle}>Save</h2>
          <p className={styles.featureDescription}>Nearly 40% of adults have less than $1,000 saved for financial emergencies. Create a safety net to prepare for unexpected expenses.</p>
        </div>
        <div className={styles.featureButton}>
          <Link to="/signup">
            <button className={styles.signupButton}>Sign up for free</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Landing