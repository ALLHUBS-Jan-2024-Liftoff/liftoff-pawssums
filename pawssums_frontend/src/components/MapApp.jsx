import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  fetchEncounters,
  addNewEncounter,
  editEncounter,
  deleteEncounter
} from "../services/encounterService";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

// Custom component to render list with Advanced Markers
const EncounterMarkers = (props) => {
//     console.log("EncounterMarkers props:", props.encounters);
  return (
    <>
      {props.encounters.map((encounter) => (
        <AdvancedMarker
          key={encounter.id}
          position={{ lat: encounter.latitude, lng: encounter.longitude }}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export const MapApp = () => {

  const positionSTL = { lat: 38.62, lng: -90.19 };
  const [encounters, setEncounters] = useState([]);
  console.log("encounterMarkers props:", encounters);

  useEffect(() => {
    fetchEncounters()
      .then(data => {
        console.log('Fetched encounters:', data); // Log the fetched data
        setEncounters(data);
      })
      .catch(error => console.error('Error fetching encounters:', error));
  }, []);

  return (
    <APIProvider apiKey="AIzaSyBB-kFmMyRJ7xPlGzMxPHfYVvtzSTUDDsg">
      <div style={{ height: "60vh", width: "100vh" }}>
        <Map
          defaultZoom={9}
          defaultCenter={positionSTL}
          mapId="7c334410935a7458"
        >
          <EncounterMarkers encounters={encounters} />
        </Map>
      </div>
    </APIProvider>
  );
};