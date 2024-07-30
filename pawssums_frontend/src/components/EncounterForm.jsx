import React, { useState } from 'react';

export const EncounterForm = () => {
  const [animal, setAnimal] = useState('');
  const [description, setDescription] = useState('');


const handleSubmitClick = () => {
console.log('You did it!')
console.log('Animal:', animal);
console.log('Description:', description);

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
      </div>
      <button onClick={() => handleSubmitClick(animal, description)}>Submit Encounter</button>
    </div>
  );
};

