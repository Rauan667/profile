import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <h1>My Profile</h1>
      <div>
        <button onClick={() => window.scrollTo(0, 0)}>Profile</button>
        <button onClick={() => window.scrollTo(0, 889)}>Education</button>
        <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Contacts</button>
        <button onClick={() => window.open('https://www.instagram.com/raunrv_?igsh=dXVsZTVranM5d21n', '_blank')}>Instagram</button>
      </div>
    </nav>
  );
}

export default Navbar;
