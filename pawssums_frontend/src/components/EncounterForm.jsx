import React, { useState } from "react";
import { addNewEncounter } from "../services/encounterService";

export const EncounterForm = () => {
  const [animal, setAnimal] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animal !== "" && description !== "") {
      addNewEncounter(animal, description, latitude, longitude);
      setAnimal("");
      setDescription("");
      setLatitude("");
      setLongitude("")
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-light p-3 border rounded w-25">
        <h2>Register Encounter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label class="form-label">Animal:</label>
            <input class="form-control"
              type="text"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label class="form-label">Description:</label>
            <input class="form-control"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label class="form-label">Latitude:</label>
            <input class="form-control"
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label class="form-label">Longitude:</label>
            <input class="form-control"
              type="text"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <button className="btn btn-success border w-100" type="submit">Add Encounter</button>
        </form>
      </div>
    </div>
  );
};
