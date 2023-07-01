import React from 'react';
import { Navbar } from "./components/NavBar/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
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

