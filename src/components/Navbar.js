import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    let location = useLocation().pathname    

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

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
                <div className="hamburger">
                    <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>

                    {/* <button className='menu' onClick={props.logout}>
                        Logout
                    </button> */}
                </div>
                <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                    GHHHH
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar