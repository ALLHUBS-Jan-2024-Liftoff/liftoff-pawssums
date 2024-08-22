import React, { createContext, useContext, useEffect, useState } from 'react';

const UserIDContext = createContext(null);

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found in local storage');
    throw new Error('No token found');
  }
  return token;
};

const parseJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing token', error);
    return null;
  }
};

export const UserIDProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    try {
      const token = getToken();
      const decodedToken = parseJWT(token);
      if (decodedToken) {
        setUserID(decodedToken.userID);
      }
    } catch (error) {
      console.error('Error getting or parsing token', error);
    }
  }, []);

  return (
    <UserIDContext.Provider value={userID}>
      {children}
    </UserIDContext.Provider>
  );
};

export const useUserID = () => {
  return useContext(UserIDContext);
};