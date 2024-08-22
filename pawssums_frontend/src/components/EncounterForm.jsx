import React, { useState, useEffect } from "react";

export const EncounterForm = ({
  onSubmit,
  initialAnimal = "",
  initialDescription = "",
  initialLatitude = "",
  initialLongitude = "",
  encounterID = null
}) => {
  const [animal, setAnimal] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setAnimal(initialAnimal);
    setDescription(initialDescription);
    setLatitude(initialLatitude);
    setLongitude(initialLongitude);
  }, [initialAnimal, initialDescription, initialLatitude, initialLongitude]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(animal, description, latitude, longitude, encounterID);
    setAnimal("");
    setDescription("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Animal:</label>
          <input
            className="form-control"
            type="text"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            className="form-control"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Latitude:</label>
          <input
            className="form-control"
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude:</label>
          <input
            className="form-control"
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <button className="btn btn-success border w-100" type="submit">
          {encounterID ? "Update Encounter" : "Add Encounter"}
        </button>
      </form>
    </div>
  );
};