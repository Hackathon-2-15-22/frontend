import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { logout } from '../../utility/auth';

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.buttons}>
                <button 
                    className={styles.logout}
                    onClick={()=> {
                        logout()
                        navigate('/')}}
                    >LOGOUT</button>
            </div>
        </div>
    )
}

export default Navbar