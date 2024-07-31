import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/api/encounters`);
    return response.data;
      } catch (error) {
        console.error("Error: not able to fetch encounters", error);
        throw error;
        }
       };

   export const addEncounter = async (animal, description) => {
     try {
       const response = await axios.post(`${BASEAPIURL}/api/encounters/add`, null, {
         params: { animal, description },
       });
       return response.data;
     } catch (error) {
       console.error("Error: not able to add encounter", error);
       throw error;
     }
   };

//    export const deleteEncounter = async (encounterId) => {
//      try {
//        await axios.post(`${BASEAPIURL}/api/encounters/delete`, null, {
//          params: { encounterId },
//        });
//      } catch (error) {
//        console.error("Error: not able to delete encounter!", error);
//        throw error;
//      }
//    };