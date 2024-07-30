
//
// export const RegisterEncounter = () => {
//
//     return(
//         <div>
//             <h1>Register Encounter</h1>
//
//         </div>
//     )
// }

import React, { useState } from 'react';

export const RegisterEncounter = () => {
  const [animal, setAnimal] = useState('');
  const [description, setDescription] = useState('');

  const handleAnimalClick = () => {
    submitData('animal', animal);
  };

  const handleDescriptionClick = () => {
    submitData('description', description);
  };

  const submitData = (name, value) => {
    const data = { [name]: value };
    fetch('/encounter/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Register Encounter</h1>
      <div>
        <label>
          Type of Animal:
          <input
            type="text"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          />
        </label>
        <button onClick={handleAnimalClick}>Submit Animal</button>
      </div>

      <div>
        <label>
          Description of Encounter:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button onClick={handleDescriptionClick}>Submit Description</button>
      </div>
    </div>
  );
};

export default RegisterEncounter;

