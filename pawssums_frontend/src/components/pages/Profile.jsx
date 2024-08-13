import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../services/UserService';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';
import { MapApp } from '../MapApp';

export const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return (
            <div>
                <Navbar />
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <h1>Profile</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        // <div>
        //     <Navbar />
        //     <div className="d-flex justify-content-center align-items-center vh-100">
        //         <div className="bg-light p-3 border rounded w-50 d-flex flex-row">
        //             <div className="bg-white p-3 border rounded m-5 w-50">
        //                 <h1 className="text-center p-2">Profile</h1>
        //                 <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2">
        //                     <p className="mb-0"><strong>Name: </strong></p>
        //                     <p className="mb-0 ms-2">{profile.name}</p>
        //                 </div>
        //                 <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2 mt-2">
        //                     <p className="mb-0"><strong>Email: </strong></p>
        //                     <p className="mb-0 ms-2">{profile.email}</p>
        //                 </div>
        //                 <Link to="/register-encounter" className="btn btn-primary ms-auto w-100 p-2 mt-2">Register Encounter</Link>
        //             </div>
        //             <div className="bg-white p-3 border rounded m-5 w-50">
        //                 <h1 className="text-center">MAP</h1>
        //                 <MapApp/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-light p-3 border rounded w-75 d-flex flex-row">
                    <div className="bg-white p-3 border rounded me-3 flex-grow-1" style={{ minWidth: '300px', maxWidth: '600px' }}>
                        <h1 className="text-center p-2">Profile</h1>
                        <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2">
                            <p className="mb-0"><strong>Name: </strong></p>
                            <p className="mb-0 ms-2">{profile.name}</p>
                        </div>
                        <div className="bg-light border rounded d-flex flex-row align-items-center justify-content-start p-2 mt-2">
                            <p className="mb-0"><strong>Email: </strong></p>
                            <p className="mb-0 ms-2">{profile.email}</p>
                        </div>
                        <Link to="/register-encounter" className="btn btn-primary ms-auto w-100 p-2 mt-2">Register Encounter</Link>
                    </div>
                    <div className="bg-white p-3 border rounded flex-grow-3 ms-5" style={{ minWidth: '600px', overflow: 'hidden' }}>
                        <h1 className="text-center">MAP</h1>
                        <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                            <MapApp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
