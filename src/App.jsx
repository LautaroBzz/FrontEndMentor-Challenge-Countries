import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import Loader from './Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    if (data.status === 404) {
      setCountries([]);
      return;
    }
    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  }, []);

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header 
        onClick={switchMode} 
        darkMode={darkMode}
      />

      {loading && <Loader />}

      <Routes>
        <Route
          path='/'
          exact
          element={
            <CountriesList 
              setCountries={setCountries}
              darkMode={darkMode}
              fetchData={fetchData}
              countries={countries}
            />
          }
        />

        <Route 
          path=':countryCode' 
          element={
            <CountryDetails 
              darkMode={darkMode} 
              countries={countries} 
              fetchData={fetchData} 
            />
          }
        />

        <Route 
          path='*' 
          element={
            <div className='countries'>
              <p>Nothing to see over here...</p>
            </div>
          }
        />
        
      </Routes>
    </div>
  )
};

export default App;
