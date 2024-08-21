import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';

// Function to get token from local storage
export const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found in local storage');
    throw new Error('No token found');
  }
  return token;
};

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

export const fetchUserProfile = async () => {
    try {
        const token = getToken();
        const response = await axios.get(`${BASE_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Profile fetch error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const logoutUser = () => {
        localStorage.clear();
        localStorage.removeItem('token');
};