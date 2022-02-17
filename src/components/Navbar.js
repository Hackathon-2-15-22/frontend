import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../utility/auth';

const Navbar = () => {
    const navigate = useNavigate()
    let location = useLocation().pathname    
    return (
        <div className="nav">
            <Link to="/">
                <div className="title">ea<span>$</span>e</div>
            </Link>
            {location==='/' ? (
                <>
                    <Link to="/login">
                        <div className='menu'>Login</div>
                    </Link>
                </>
            ) : location==='/signup' 
            || location==='/login' ? (
                <>
                    <Link to='/'>
                        <div className='menu'>Back</div>
                    </Link>
                </>
            ) : (
                <>
                    <button className='menu' 
                        onClick={()=> {
                            logout()
                            navigate('/')
                    }}>
                        Logout
                    </button>
                </>
            )}
        </div>
    )
}

export default Navbar