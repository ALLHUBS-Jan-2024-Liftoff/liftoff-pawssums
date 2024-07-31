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
          .then((addNewEncounter) => {
            setEncounters([...encounters, addNewEncounter]);
          })
          .catch(error => {
            console.error("There was an error adding the encounter", error);
          });
      };

    return(
        <div>
            <h1>EncounterList</h1>
          <ul>
            {encounters.map(encounter => (
              <li key={encounter.id}>
                {encounter.animal} - {encounter.description}
              </li>
            ))}
          </ul>
        </div>
    );
}

