import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./components/Navbar/Navbar.css"
import ProfileCard from './components/ProfileCard/ProfileCard';
import './App.css';


function App() {
  const saludo = "Brindamos productos para las soluciones del futuro";
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="profile-list">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default App;

