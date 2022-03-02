import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    let location = useLocation().pathname    
    return (
        <div className="nav">
            <Link to="/">
                <div className="title">ea<span className='green'>$</span>e</div>
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
                    <button className='menu' onClick={props.logout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    )
}

export default Navbar