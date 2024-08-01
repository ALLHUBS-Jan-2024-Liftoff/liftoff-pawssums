import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Container fluid>
        <div className="d-grid justify-content-center p-5">
          <div className="bg-light p-3 border rounded m-5">
            <h1 className="text-center p-2">WILD ENCOUNTERS</h1>
          </div>
          <div className="bg-light p-3 border rounded m-5 p-5">
            <h1 className="text-center border">MAP</h1>
          </div>
          <Button color="link">
            <Link to="/Register">Register New User</Link>
          </Button>
          <Button color="link">
            <Link to="/register-encounter">Add New Animal Encounter</Link>
            </Button>
            <Button color="link">
                        <Link to="/login">Existing User? Click Here to Login </Link>
                        </Button>
            <Button color="link">
                        <Link to="/encounter-list">See All Encounters</Link>
                         </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;