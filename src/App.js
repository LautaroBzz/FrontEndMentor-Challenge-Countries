import { useState } from 'react';
import Header from './Header';
import Country from './Country';
import CountryDetails from './CountryDetails';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState)
  };

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>
      <Routes>
        <Route
          path='/'
          element={
            <div className='app_body'>
              <div className='inputs'>
                <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
                  <SearchIcon />
                  <input type='text' placeholder='Search for a country...' />
                </div>
                <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
                  <select>
                    <option value=''>Filter by Region</option>
                    <option value=''>Africa</option>
                    <option value=''>America</option>
                    <option value=''>Asia</option>
                    <option value=''>Europe</option>
                    <option value=''>Oceania</option>
                  </select>
                </div>
              </div>
              <div className='countries'>
                <Country darkMode={darkMode}/>
              </div>
            </div>
          }
        />
        <Route path='country-details' element={<CountryDetails darkMode={darkMode} />}/>
      </Routes>
    </div>
  )
}

export default App
