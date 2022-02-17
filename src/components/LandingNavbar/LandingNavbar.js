import { Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="nav">
            <div className="logo">ea<span>$</span>e</div>
            <div className="row">
                <Link to="/login">
                    <a className="login">Logo</a>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar