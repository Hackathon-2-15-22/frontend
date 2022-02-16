import { Link } from 'react-router-dom';
import styles from './LandingNavbar.module.css'

const LandingNavbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.buttons}>
                <Link to="/login">
                    <button className={styles.login}>LOGIN</button>
                </Link>
                <Link to="/signup">
                    <button className={styles.signup}>SIGN UP</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar