import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryDetails = ({ darkMode, countries, fetchData }) => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries?.forEach((country) => {
    if (country.cca3 === countryCode) {
      name = country.name.common;
      flagImg = country.flags.svg;
      nativeName = country.name.official;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      if (country.currencies) {
        Object.values(country.currencies)?.forEach((currency) => {
          currencies.push(currency.name)
        });
      }
      if (country.languages) {
        Object.values(country.languages)?.forEach((language) => {
          languages.push(language)
        });
      }
      if (country.borders) {
        Object.values(country.borders)?.forEach((border) => {
          borders.push(border)
        });
      }
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
                {currencies?.map((currency, key) => {
                  if (currencies?.indexOf(currency) !== currencies?.length - 1) {
                    return (
                      <span key={key} className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {' '}{currency}
                      </span>
                    )
                  } else {
                    return (
                      <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {' '}{currency}
                      </span>
                    )
                  }
                })}
              </p>
              <p>
                Languages:{' '}
                {languages?.map((language, key) => {
                  if (languages?.indexOf(language) !== languages?.length - 1) {
                    return (
                      <span key={key} className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {' '}{language}
                      </span>
                    )
                  } else {
                    return (
                      <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {' '}{language}
                      </span>
                    )
                  }
                })}
              </p>
            </div>
          </div>

          Border Countries:
          {borders.length ? (
            borders.map((border, key) => (
              <div 
                key={key} 
                className={`border_country ${darkMode ? 'darkMode' : ''}`}
                onClick={() => {
                  // fetchData();
                  navigate(`/${border}`);
                }}
              >
                <p>{border}</p>
              </div>
            ))
          ) : (
            <div className={`values ${darkMode ? 'darkMode' : ''}`}>
              <p>No borders</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CountryDetails;
