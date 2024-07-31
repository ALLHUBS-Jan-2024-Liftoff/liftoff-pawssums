import React, { useEffect, useState } from 'react';
import {EncounterForm} from '../EncounterForm';

export const EncounterList = () => {
// function EncounterList(){
const [encounters, setEncounters] = useState([]);

const fetchEncounters = () => {
    fetch('http://localhost:8080/api/encounters')
      .then(response => response.json())
      .then(data => setEncounters(data))
      .catch(error => console.error('Error fetching encounters:', error));
  };

  useEffect(() => {
      fetchEncounters();
    }, []);

    return(
        <div>
            <h1>EncounterList</h1>
            <ul>
                   <EncounterForm onNewEncounter={fetchEncounters} />
                           {encounters.map(encounter => (
                             <li key={encounter.id}>{encounter.animal}</li>
                    ))}
                  </ul>
        </div>
    );
};

