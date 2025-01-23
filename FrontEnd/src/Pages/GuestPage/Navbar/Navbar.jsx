import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ showCard, onToggleCard }) => {
  const handleButtonClick = () => {
    onToggleCard(!showCard);
  };

  return (
    <div className="navbar">
      <div className="navbar-title">Liste de Présence</div>
      <button onClick={handleButtonClick} className="navbar-button">
        {showCard ? "Adding student to Database ..." : "Ajout d'Étudiant"}
      </button>
    </div>
  );
};

export default Navbar;
