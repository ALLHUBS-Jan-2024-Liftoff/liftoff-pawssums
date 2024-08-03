import React, { useEffect, useState } from "react";
import { EncounterForm } from "../EncounterForm";
import {
  fetchEncounters,
  addNewEncounter,
  editEncounter,
  deleteEncounter
} from "../../services/encounterService";
import {Navbar} from '../Navbar'

export const EncounterList = () => {
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

  const handleAddEncounter = (animal, description) => {
    addNewEncounter(animal, description)
      .then((newEncounter) => {
        setEncounters([...encounters, newEncounter]);
      })
      .catch((error) => {
        console.error("There was an error adding the encounter", error);
      });
  };

   const handleEditEncounter = (id, animal, description) => {
      editEncounter(id, animal, description)
        .then((updatedEncounter) => {
          setEncounters(
            encounters.map((enc) => (enc.id === id ? updatedEncounter : enc))
          );
          setEditingEncounter(null);
        })
        .catch((error) => {
          console.error("There was an error editing the encounter", error);
        });
    };

    const handleDeleteEncounter = (id) => {
      deleteEncounter(id)
        .then(() => {
          setEncounters(encounters.filter((enc) => enc.id !== id));
        })
        .catch((error) => {
          console.error("There was an error deleting the encounter", error);
        });
    };

return (
    <div>
      <Navbar />
      <h1>Encounter List</h1>
      <button onClick={() => setShowEncounterForm(!showEncounterForm)}>
        {showEncounterForm ? "Cancel" : "Add Encounter"}
      </button>
      {showEncounterForm && (
        <EncounterForm onAddEncounter={handleAddEncounter} />
      )}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Animal</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {encounters.map((encounter) => (
            <tr key={encounter.id}>
              <td>{encounter.animal}</td>
              <td>{encounter.description}</td>
              <td>
                <button onClick={() => setEditingEncounter(encounter)}>Edit</button>
                <button onClick={() => handleDeleteEncounter(encounter.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingEncounter && (
        <EncounterForm
          onAddEncounter={(animal, description) =>
            handleEditEncounter(editingEncounter.id, animal, description)
          }
          initialAnimal={editingEncounter.animal}
          initialDescription={editingEncounter.description}
        />
      )}
    </div>
  );
};

//   return (
//     <div>
//       <Navbar/>
//       <h1>Encounter List</h1>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th scope="col">Animal</th>
//             <th scope="col">Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {encounters.map((encounter, index) => (
//             <tr key={encounter.id}>
//               <td>{encounter.animal}</td>
//               <td>{encounter.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
