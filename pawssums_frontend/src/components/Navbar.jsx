

export const Navbar = () => {
    return (
        <nav className="navbar nav-expand-sm navbar-light bg-light">
            <a className="navbar-brand mb-0 h1" href="#">
                <img className="d-inline-block align-top" src="" />
                Wild Encounters
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
