import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="nav">
            <div className="logo">LOGO</div>
            <div className="row">
                <Link to="/login">
                    <a className="center">LOGIN</a>
                </Link>
                <Link to="/signup">
                    <a className="signup">SIGN UP</a>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar