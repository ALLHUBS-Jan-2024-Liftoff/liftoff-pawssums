import axios from 'axios';


const BASEAPIURL = "http://localhost:8080/api/encounters";


// Function to get token from local storage
const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found in local storage');
    throw new Error('No token found');
  }
  return token;
};

export const fetchEncounters = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}`);
    return response.data;
  } catch (error) {
    console.error("Error: not able to fetch encounters", error);
    throw error;
  }
};

export const addNewEncounter = async (animal, description, latitude, longitude) => {
  try {
    const token = getToken();
    const response = await axios.post(`${BASEAPIURL}/add`, null, {
      params: { animal, description, latitude, longitude },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error: not able to add encounter", error);
    throw error;
  }
};

export const deleteEncounter = async (encounterId) => {
  try {
    const token = getToken();
    await axios.post(`${BASEAPIURL}/delete`, null, {
      params: { encounterId },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error("Error: not able to delete encounter!", error);
    throw error;
  }
};

export const editEncounter = async (id, animal, description, latitude, longitude) => {
  try {
    const token = getToken();
    const response = await axios.put(`${BASEAPIURL}/edit/${id}`, null, {
      params: { animal, description, latitude, longitude },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error: not able to edit encounter!", error);
    throw error;
  }
};