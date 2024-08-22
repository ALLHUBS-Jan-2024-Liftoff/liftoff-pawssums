import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile, logoutUser  } from '../../services/UserService';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';
import { MapApp } from '../MapApp';

export const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const userProfile = await fetchUserProfile(token);
                    setProfile(userProfile);
                } else {
                    setError('No token found.');
                }
            } catch (error) {
                console.error('Failed to fetch profile:', error);
                setError('Failed to fetch profile.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleLogout = () => {
        logoutUser();
        setProfile(null);
        setError(null);
        navigate('/login');
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
    </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <p className="alert alert-warning" role="alert">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-light p-3 border rounded w-75 d-flex flex-row">
                    <div className="bg-white p-3 border rounded me-3 flex-grow-1" style={{ minWidth: '300px', maxWidth: '600px' }}>
                        <h1 className="text-center p-2">Profile</h1>
                        <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2 mb-3">
                            <p className="mb-0"><strong>Name: </strong></p>
                            <p className="mb-0 ms-2">{profile.name}</p>
                        </div>
                        <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2 mb-3">
                            <p className="mb-0"><strong>Email: </strong></p>
                            <p className="mb-0 ms-2">{profile.email}</p>
                        </div>
                        <Link to="/encounter-list" className="btn btn-primary ms-auto w-100 p-2 mb-3">Encounter List</Link>
                        <button onClick={handleLogout} className="btn btn-danger ms-auto w-100 p-2 mb-3">Logout</button>
                    </div>
                    <div className="bg-white p-3 border rounded flex-grow-3 ms-5" style={{ minWidth: '600px', overflow: 'hidden' }}>
                        <h1 className="text-center">MAP</h1>
                        <div style={{ width: '100%', height: '500px', overflow: 'hidden'}}>
                            <MapApp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
