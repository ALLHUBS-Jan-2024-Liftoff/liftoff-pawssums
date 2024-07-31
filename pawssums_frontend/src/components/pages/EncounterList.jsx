import React, { useEffect, useState } from 'react';

export const EncounterList = () => {
// function EncounterList(){
const [encounters, setEncounters] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/api/encounters')
      .then(response => response.json())
      .then(data => setEncounters(data))
      .catch(error => console.error('Error fetching encounters:', error));
  }, []);

    return(
        <div>
            <h1>EncounterList</h1>
            <ul>
                    {encounters.map(user => (
                      <li key={encounter.id}>{encounter.type}</li>
                    ))}
                  </ul>
        </div>
    );
}
export default EncounterList;