import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Country from './Country';
import CountryDetails from './CountryDetails';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState)
  };

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log('Fetch error: ', error)
    }
  }, []);
  

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
                {countries.map((country) => (
                  <Country 
                    darkMode={darkMode}
                    key={country.cca2}
                    name={country.name.common}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flags.svg}
                  />
                ))}
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
