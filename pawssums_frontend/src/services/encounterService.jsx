import axios from 'axios';

const BASEAPIURL = "http://localhost:8080/api/encounters";

export const fetchEncounters = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}`);
    return response.data;
      } catch (error) {
        console.error("Error: not able to fetch encounters", error);
        throw error;
        }
       };

   export const addNewEncounter = async (animal, description, latitude, longitude, token) => {
     try {
       const response = await axios.post(`${BASEAPIURL}/add`, null, {
       params: {animal, description, latitude, longitude},
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

   export const deleteEncounter = async (encounterId, token) => {
     try {
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

   export const editEncounter = async (id, animal, description, latitude, longitude, token) => {
        try {
          const response = await axios.put(`${BASEAPIURL}/edit/${id}`, null, {
          params: {animal, description, latitude, longitude},
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