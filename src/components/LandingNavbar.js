import { Link, useNavigate } from 'react-router-dom';

const LandingNavbar = () => {
    const navigate = useNavigate()
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