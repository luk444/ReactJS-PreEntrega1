import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, age, description, image }) => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={image} alt={name} />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{age} Producto</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
