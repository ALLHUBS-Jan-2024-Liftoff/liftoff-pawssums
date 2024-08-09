"use client";
import './App.css'
import { EncounterList } from './components/pages/EncounterList';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Profile } from './components/pages/Profile';
import { Register } from './components/pages/Register';
import { RegisterEncounter } from './components/pages/RegisterEncounter';
import { Search } from './components/pages/Search';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>


    <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register-encounter" element={<RegisterEncounter />} />
              <Route path="/encounter-list" element={<EncounterList />} />
              <Route path="/search" element={<Search />} />
              <Route path="/" element={<Home />} />
            </Routes>

    </Router>
  );
}

export default App
