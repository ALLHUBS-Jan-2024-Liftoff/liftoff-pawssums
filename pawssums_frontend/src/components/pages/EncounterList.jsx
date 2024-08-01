import React, { useEffect, useState } from 'react';
import {EncounterForm} from '../EncounterForm';
import {fetchEncounters, addNewEncounter} from "../../services/encounterService";

export const EncounterList = () => {
const [showEncounterForm, setShowEncounterForm] = useState(false);
const [encounters, setEncounters] = useState([]);


  useEffect(() => {
      fetchEncounters()
        .then(setEncounters)
        .catch((error) => {
        console.error("Error fetching encounters", error);
        });
    } , []);

     const handleAddEncounter = (animal, description) => {
        addNewEncounter(animal, description)
          .then((newEncounter) => {
            setEncounters([...encounters, newEncounter]);
          })
          .catch(error => {
            console.error("There was an error adding the encounter", error);
          });
      };

    return(
        <div>
            <h1>Encounter List</h1>
            <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Animal</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                       {encounters.map((encounter) => (
                       <tr key={encounter.id}>
                       <td>{encounter.animal}</td>
                       <td>{encounter.description}</td>
                       </tr>
                       ))}
                    </tbody>
              </table>
        </div>
    );
};

