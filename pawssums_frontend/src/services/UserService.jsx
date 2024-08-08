import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/newUser`, {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const fetchUserProfile = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Profile fetch error:', error);
        throw error;
    }
};