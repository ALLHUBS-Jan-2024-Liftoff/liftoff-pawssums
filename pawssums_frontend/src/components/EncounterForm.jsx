import React, { useState, useEffect } from "react";
import { addNewEncounter } from "../services/encounterService";
import { editEncounter } from "../services/encounterService";

export const EncounterForm = ({
    onSubmit,
    userID,
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
  },[initialAnimal, initialDescription, initialLatitude, initialLongitude]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (encounterID) {
    editEncounter(encounterID, animal, description, latitude, longitude)
        .then((updatedEncounter) => {
          onSubmit(updatedEncounter);
          });
    } else {
      addNewEncounter(userID, animal, description, latitude, longitude)
            .then((newEncounter) => {
              onSubmit(newEncounter);
      setAnimal("");
      setDescription("");
      setLatitude("");
      setLongitude("")
     });
    }
  };

   return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-light p-3 border rounded w-50">
          <h2>{initialAnimal ? "Edit Encounter" : "Register Encounter"}</h2>
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
              {initialAnimal ? "Update Encounter" : "Add Encounter"}
            </button>
          </form>
        </div>
      </div>
    );
  };
