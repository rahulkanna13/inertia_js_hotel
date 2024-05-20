import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <span>Welcome to Hotel App</span>
      </div>
      <div className="right">
        <img src="profile-icon.png" alt="Profile Icon" />
      </div>
    </div>
  );
};

export default Topbar;
