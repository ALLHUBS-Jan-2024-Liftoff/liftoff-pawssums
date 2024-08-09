"use client";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,} from "@vis.gl/react-google-maps";

export const MapApp = () => {
  const positionSTL = {lat: 38.62 ,lng:-90.19};
  const [open, setOpen] = useState(false);
  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    // Fetch encounters from the backend
    fetch(`/api/encounters`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched encounters:', data); // Log the fetched data
        setEncounters(data);
      })
      .catch(error => console.error('Error fetching encounters:', error));
  }, []);

  return (
    <APIProvider apiKey="AIzaSyBB-kFmMyRJ7xPlGzMxPHfYVvtzSTUDDsg">
      <div style = {{height: "60vh", width: "100vh"}}>
          <Map defaultZoom={9}
               defaultCenter={positionSTL}
               mapId="7c334410935a7458">

          {encounters.map((encounter, index) => (
              <AdvancedMarker
                  key={encounter.id}
                  position={{ lat: encounter.latitude, lng: encounter.longitude}}
                  >
              <Pin
                background={"green"}
                borderColor={"orange"}
                glyphColor={"orange"}
                />
              </AdvancedMarker>
              ))}

          </Map>
      </div>
    </APIProvider>
    );
}



