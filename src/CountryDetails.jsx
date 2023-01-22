import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryDetails = ({ darkMode, countries }) => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  // let currencies = [];
  // let languages = [];
  // let borders = [];

  countries?.forEach((country) => {
    if (country.cca2 === countryCode) {
      name = country.name.common;
      flagImg = country.flags.svg;
      nativeName = country.name.official;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
    }
  });

  return (
    <div className="country_details">
      <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={() => navigate('/')}>
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img src={flagImg} alt="flag" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Native Name:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{nativeName}</span>
              </p>
              <p>
                Population:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{new Intl.NumberFormat().format(population)}</span>
              </p>
              <p>
                Region:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
              </p>
              <p>
                Sub region:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{subregion}</span>
              </p>
            </div>

            <div className="right_info">
              <p>
                Capital:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
              </p>
              <p>
                Currencies:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>asdasfafs</span>
              </p>
              <p>
                Languages:{' '}
                <span className={`values ${darkMode ? 'darkMode' : ''}`}>asdasfafs</span>
              </p>
            </div>
          </div>

          Border Countries:
          <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
            <p>Test</p>
          </div>
          <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
            <p>Test</p>
          </div>
          <div className={`border_country ${darkMode ? 'darkMode' : ''}`}>
            <p>Test</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CountryDetails;
