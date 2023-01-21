import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Country from './Country';
import CountryDetails from './CountryDetails';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const noCountriesFound = countries.status || countries.message;

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    if (data.status === 404) {
      setCountries([]);
      return;
    }
    setCountries(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  }, []);

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
        const filteredData = await response.json();
        setCountries(filteredData);
      };
      try {
        fetchSearch();
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    } else {
      fetchData();
    }
  };

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${selectValue}`);
        const filteredData = await response.json();
        if (selectValue === 'Filter by Region') {
          try {
            fetchData();
          } catch (error) {
            console.log('Fetch error: ', error);
          }
          return;
        };
        setCountries(filteredData);
      };
      try {
        fetchSelect();
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    } else {
      fetchData();
    }
  };
  
  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header 
        onClick={switchMode} 
        darkMode={darkMode}
      />

      <Routes>
        <Route
          path='/'
          element={
            <div className='app_body'>
              <div className='inputs'>
                <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
                  <SearchIcon />
                  <input 
                    type='text' 
                    placeholder='Search for a country...' 
                    ref={countriesInputRef} 
                    onChange={searchCountries}
                  />
                </div>
                <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
                  <select 
                    ref={regionRef} 
                    onChange={selectRegion}
                  >
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>
              <div className='countries'>
                {!noCountriesFound ? 
                  (countries.map((country) => (
                    <Country 
                      darkMode={darkMode}
                      key={country.cca2}
                      name={country.name.common}
                      capital={country.capital}
                      population={country.population}
                      region={country.region}
                      flag={country.flags.svg}
                    />
                  )))
                : (
                  <p>No countries found...</p>
                )}
              </div>
            </div>
          }
        />

        <Route 
          path='country-details' 
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
    </div>
  )
};

export default App;
