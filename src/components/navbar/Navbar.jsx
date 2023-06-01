import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import logo from '../../assets/images.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); //For the button on topleft

  const handleMenuClick = () => {
    setDropdownOpen(!dropdownOpen); //on click changes the state of dropdown
  };

  return (
    <div className='chat__navbar'>
      <div className='chat__navbar-left'>
        <div className='chat__navbar-button'>
          <button onClick={handleMenuClick}>
            {dropdownOpen ? <FaTimes size='40' /> : <FaBars size='60' />}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                wow
              </div>
            </div>
          )}
        </div>
        <div className='chat__navbar-links_logo'> {/*logo on the navbar */}
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="user-container"> {/*Text that appears on top right */}
        <span className="user-text">User1</span>
      </div>
    </div>
  );
}

export default Navbar;