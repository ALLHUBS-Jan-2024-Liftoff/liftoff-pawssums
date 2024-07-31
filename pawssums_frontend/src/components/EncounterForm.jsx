import React, { useState } from 'react';

export const EncounterForm = ({ onNewEncounter }) => {
  const [animal, setAnimal] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEncounter = { animal, description };

    fetch('http://localhost:8080/api/encounters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEncounter)
    })
    .then(response => response.json())
    .then(data => {
      setAnimal('');
      setDescription('');
      onNewEncounter(); // Refresh the encounter list
    })
    .catch(error => console.error('Error adding encounter:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Animal:</label>
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Encounter</button>
    </form>
  );
};

//   return (
//     <div>
//       <h1>Register Encounter</h1>
//       <div>
//         <label>
//           Type of Animal:
//           <input
//             type="text"
//             value={animal}
//             onChange={(e) => setAnimal(e.target.value)}
//           />
//         </label>
//       </div>
//
//       <div>
//         <label>
//           Description of Encounter:
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={() => handleSubmitClick(animal, description)}>Submit Encounter</button>
//     </div>
//   );
// };

