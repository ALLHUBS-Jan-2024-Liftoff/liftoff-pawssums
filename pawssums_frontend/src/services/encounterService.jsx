import axios from 'axios';
import { getToken } from './UserService';

const BASEAPIURL = "http://localhost:8080/api/encounters";

export const fetchAllEncounters = async () => {
  try {
      const response = await axios.get("http://localhost:8080/api/encounters/all", {
        });
    return response.data;
  } catch (error) {
    console.error("Error: not able to fetch encounters", error);
    throw error;
  }
};

export const fetchEncounters = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${BASEAPIURL}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error: not able to fetch encounters", error);
    throw error;
  }
};

export const addNewEncounter = async (userID, animal, description, latitude, longitude, emoji) => {
  try {
    const token = getToken();
    const response = await axios.post(`${BASEAPIURL}/add`, null, {
      params: { userID, animal, description, latitude, longitude, emoji },
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

export const deleteEncounter = async (userID, encounterId) => {
  try {
    const token = getToken();
    await axios.delete(`${BASEAPIURL}/delete`, {
      data: { encounterId },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error("Error: not able to delete encounter!", error);
    throw error;
  }
};

export const editEncounter = async (userID, id, animal, description, latitude, longitude, emoji) => {
  try {
    const token = getToken();
    const response = await axios.put(`${BASEAPIURL}/edit/${id}`, null, {
      params: { userID, animal, description, latitude, longitude, emoji },
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