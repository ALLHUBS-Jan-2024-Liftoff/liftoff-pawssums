"use client";
import './App.css'
import { EncounterList } from './components/pages/EncounterList';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Profile } from './components/pages/Profile';
import { Register } from './components/pages/Register';
import { RegisterEncounter } from './components/pages/RegisterEncounter';
import { Search } from './components/pages/Search';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,} from "@vis.gl/react-google-maps";

function App() {
  const positionSTL = {lat: 38.62 ,lng:-90.19};
  const [open, setOpen] = useState(false);

  return (
    <>
    <APIProvider apiKey="AIzaSyBB-kFmMyRJ7xPlGzMxPHfYVvtzSTUDDsg">
      <div style = {{height: "60vh", width: "100vh"}}>
          <Map defaultZoom={9}
               defaultCenter={positionSTL}
               mapId="7c334410935a7458">
          <AdvancedMarker position={positionSTL} onClick={() => setOpen(true)}>
              <Pin
                background={"green"}
                borderColor={"orange"}
                glyphColor={"orange"}
                />
              </AdvancedMarker>
          </Map>
          {open && <InfoWindow position={positionSTL} onCloseClick={() => setOpen(false)}>
              <h1>Animal Sighted!</h1>
          </InfoWindow>}

      </div>
    </APIProvider>

      <Home/>
      <Login/>
      <Register/>
      <Profile/>
      <RegisterEncounter/>
      <EncounterList/>
      <Search/>
    </>
  )
}

export default App
