import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Country from './Country';

const CountriesList = ({ 
  setCountries, 
  darkMode, 
  fetchData,
  countries
}) => {
  const navigate = useNavigate();
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const noCountriesFound = countries.status || countries.message;

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

  const showDetails = (code) => {
    navigate(`${code}`)
  };

  return (
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
          <select ref={regionRef} onChange={selectRegion}>
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
        {!noCountriesFound ? (
          countries.map((country) => (
            <Country
              darkMode={darkMode}
              key={country.cca2}
              code={country.cca3}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flags.svg}
              showDetails={showDetails}
            />
          ))
        ) : (
          <p>No countries found...</p>
        )}
      </div>
    </div>
  )
};

export default CountriesList;
