import React, { useState, useEffect } from "react";
import { emojiOptions } from "../components//EmojiList";

export const EncounterForm = ({
  onSubmit,
  initialAnimal = "",
  initialDescription = "",
  initialLatitude = "",
  initialLongitude = "",
  initialEmoji = "",
  encounterID = null
}) => {
  const [animal, setAnimal] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setAnimal(initialAnimal);
    setDescription(initialDescription);
    setLatitude(initialLatitude);
    setLongitude(initialLongitude);
    setEmoji(initialEmoji);
  }, [initialAnimal, initialDescription, initialLatitude, initialLongitude, initialEmoji]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(animal, description, latitude, longitude, emoji, encounterID);
    setAnimal("");
    setDescription("");
    setLatitude("");
    setLongitude("");
    setEmoji("");
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
         <div className="mb-3">
           <label className="form-label">Emoji:</label>
           <select
             className="form-control"
             value={emoji}
             onChange={(e) => setEmoji(e.target.value)}
              >
               <option value="">Select an emoji</option>
                {emojiOptions.map((option) => (
              <option key={option.label} value={option.emoji}>
               {option.emoji} {option.label}
                  </option>
                ))}
                </select>
         </div>
        <button className="btn btn-success border w-100" type="submit">
          {encounterID ? "Update Encounter" : "Add Encounter"}
        </button>
      </form>
    </div>
  );
};