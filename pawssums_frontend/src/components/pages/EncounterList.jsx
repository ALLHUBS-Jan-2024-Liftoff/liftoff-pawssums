import React, { useEffect, useState } from "react";
import { EncounterForm } from "../EncounterForm";
import {
  fetchEncounters,
  addNewEncounter,
  editEncounter,
  deleteEncounter
} from "../../services/encounterService";
import { Navbar } from '../Navbar';
import { useUserID } from '../../services/userIDContext.jsx';

export const EncounterList = () => {

  const userID = useUserID();
  const [showEncounterForm, setShowEncounterForm] = useState(false);
  const [editingEncounter, setEditingEncounter] = useState(null);
  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    fetchEncounters()
      .then(setEncounters)
      .catch((error) => {
        console.error("Error fetching encounters", error);
      });
  }, []);

  const handleAddEncounter = (animal, description, latitude, longitude) => {
    addNewEncounter(userID, animal, description, latitude, longitude)
      .then((newEncounter) => {
        setEncounters([...encounters, newEncounter]);
        setShowEncounterForm(false);
      })
      .catch((error) => {
        console.error("There was an error adding the encounter", error);
      });
  };

  const handleEditEncounter = (id, animal, description, latitude, longitude) => {
    editEncounter(userID, id, animal, description, latitude, longitude)
      .then((updatedEncounter) => {
        setEncounters(
          encounters.map((enc) => (enc.id === id ? updatedEncounter : enc))
        );
        setEditingEncounter(null);
        setShowEncounterForm(false);
      })
      .catch((error) => {
        console.error("There was an error editing the encounter", error);
      });
  };

  const handleDeleteEncounter = (id) => {
    deleteEncounter(userID, id)
      .then(() => {
        setEncounters(encounters.filter((enc) => enc.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the encounter", error);
      });
  };

  const handleFormSubmit = (animal, description, latitude, longitude) => {
    if (editingEncounter) {
      handleEditEncounter(editingEncounter.id, animal, description, latitude, longitude);
    } else {
      handleAddEncounter(animal, description, latitude, longitude);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-light p-3 border rounded w-75 d-flex flex-column align-items-center">
          <h1 className="text-center p-2">Encounter List</h1>
          <button onClick={() => {
            setShowEncounterForm(!showEncounterForm);
            setEditingEncounter(null);
          }} className="btn btn-primary mb-3">
            {showEncounterForm ? "Cancel" : "Add Encounter"}
          </button>
          {(showEncounterForm || editingEncounter) && (
            <div className="bg-white p-3 border rounded mb-3 w-75">
              <h2 className="text-center mb-4">{editingEncounter ? "Edit Encounter" : "Add Encounter"}</h2>
              <EncounterForm
                onSubmit={handleFormSubmit}
                initialAnimal={editingEncounter?.animal || ""}
                initialDescription={editingEncounter?.description || ""}
                initialLatitude={editingEncounter?.latitude || ""}
                initialLongitude={editingEncounter?.longitude || ""}
              />
            </div>
          )}
          <div className="bg-white p-3 border rounded w-100">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Animal</th>
                  <th scope="col">Description</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {encounters.map((encounter) => (
                  <tr key={encounter.id}>
                    <td>{encounter.animal}</td>
                    <td>{encounter.description}</td>
                    <td>{encounter.latitude}</td>
                    <td>{encounter.longitude}</td>
                    <td>
                      <button onClick={() => setEditingEncounter(encounter)} className="btn btn-warning btn-sm me-2">Edit</button>
                      <button onClick={() => handleDeleteEncounter(encounter.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};