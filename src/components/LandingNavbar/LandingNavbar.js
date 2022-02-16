import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="button">
                <Link to="/login">
                    <button className="login">LOGIN</button>
                </Link>
                <Link to="/signup">
                    <button className="signup">SIGN UP</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar