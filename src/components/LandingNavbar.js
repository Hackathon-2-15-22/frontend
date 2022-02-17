import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="logo">ea<span>$</span>e</div>
            </Link>
            <div className="row">
                <Link to="/login">
                    <div className="login">Login</div>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar