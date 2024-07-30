import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">Wild Encounters</Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/register">Register Encounter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/search">Search</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;