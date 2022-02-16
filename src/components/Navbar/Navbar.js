import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { logout } from '../../utility/auth';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.buttons}>
                <button 
                    className={styles.logout}
                    onClick={()=> logout()}
                    >LOGOUT</button>
            </div>
        </div>
    )
}

export default Navbar