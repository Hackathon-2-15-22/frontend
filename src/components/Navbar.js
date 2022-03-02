import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    let location = useLocation().pathname
    const navigate = useNavigate();    

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const hrStyle = {
        padding: 0,
        margin: 0
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
                    <div className="hamburgerIcon" onClick={handleToggle}>
                        <i class="fa-solid fa-2xl fa-bars"></i>
                        {/* {navbarOpen ? "Close" : "Open"} */}
                    </div>

                    
                <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                    <div className="hamburgerNav">
                        <Link to="/">
                            <div className="title">ea<span className='green'>$</span>e</div>
                        </Link>
                        <div className="hamburgerIcon" onClick={() => {
                            handleToggle();
                            window.scrollTo(0,0)
                        }}>
                            <i class="fa-solid fa-2xl fa-x"></i>
                        </div>
                    </div>
                    <div className="navLinks">
                        <div className="navLink" onClick={() => {
                            navigate('/adjust/goals')
                            handleToggle()}}>
                            Adjust goals
                        </div>
                        <hr style={hrStyle}/>
                        <div className="navLink" onClick={() => {
                            navigate('/adjust/income')
                            handleToggle()}}>
                            Adjust income
                        </div>
                        <hr style={hrStyle}/>
                        <div className="navLink" onClick={() => {
                            navigate('/adjust/spending')
                            handleToggle()}}>
                            Adjust spending
                        </div>
                        <hr style={hrStyle}/>
                    </div>
                    <button className='menu navLogout' onClick={props.logout}>
                        Sign Out
                    </button>
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar