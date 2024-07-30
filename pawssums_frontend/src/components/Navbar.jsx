export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <a className="navbar-brand mb-0 mt-0 m-3 h1 border" href="#">
                Wild Encounters
            </a>
            <ul className="navbar-nav mb-0 mt-0 m-3">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Login
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Register
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Search
                    </a>
                </li>
            </ul>
        </nav>
    );
};
