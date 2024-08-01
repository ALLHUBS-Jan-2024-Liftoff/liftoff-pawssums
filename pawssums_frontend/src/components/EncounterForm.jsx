import React, { useState } from 'react';
import { addNewEncounter } from '../services/encounterService';

export const EncounterForm = () => {
  const [animal, setAnimal] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
      if (animal !== '' && description !== '') {
        addNewEncounter(animal, description);
        setAnimal('');
        setDescription('');
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Animal:</label>
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          required
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

