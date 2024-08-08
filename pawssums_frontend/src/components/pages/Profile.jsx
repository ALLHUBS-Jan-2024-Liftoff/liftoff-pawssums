import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../services/UserService';
import {Navbar} from '../Navbar'

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
                <h1>Profile</h1>
                <p>Loading profile...</p>
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
        <div>
            <Navbar />
            <h1>Profile</h1>
            {profile ? (
                <div>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                </div>
            ) : (
                <p>No profile information available.</p>
            )}
        </div>
    );
};
