import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <Link to="/home" className="navbar-brand mb-0 mt-0 m-3 h1 border" href="#">Wild Encounters</Link>
            <ul className="navbar-nav mb-0 mt-0 m-3">
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-decoration-none">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-decoration-none">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link text-decoration-none">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/encounter-list" className="nav-link text-decoration-none">Encounters</Link>
                </li>
            </ul>
        </nav>
    );
};