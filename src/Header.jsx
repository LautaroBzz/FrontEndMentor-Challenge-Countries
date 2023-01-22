import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = ({ onClick, darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
      <div className='header_container'>
        <h2 className='logo' onClick={() => navigate('/')}>Where in the world?</h2>
        <div className='switch_mode' onClick={onClick}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          <h3>{darkMode ? 'Light Mode' : 'Dark Mode'}</h3>
        </div>
      </div>
    </div>
  )
};

export default Header;
