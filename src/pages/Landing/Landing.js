import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = props => {

    const date = new Date();
    const n = date.toDateString();
    const t = date.toLocaleDateString();


  return (
    <main className={styles.container}>
      <h1>Hello, welcome to Tendr!</h1>
      <h1>Today is {t}</h1>
      <div className="buttons">
        <Link to="/signup">
            <button>Sign Up</button>
        </Link>
        <Link to="/login">
            <button>Login</button>
        </Link>
      </div>
    </main>
  )
}

export default Landing