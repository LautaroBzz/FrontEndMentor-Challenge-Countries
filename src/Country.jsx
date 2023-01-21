import React from 'react';

const Country = ({ 
  darkMode,
  name,
  capital,
  population,
  region,
  flag 
}) => {
  return (
    <div className={`country ${darkMode ? 'darkMode' : ''}`}>
      <div className="flag_container">
        <img src={flag} alt="flag" />
      </div>
      <div className="details">
        <h3 className="name">{name}</h3>
        <p>
          Population:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{new Intl.NumberFormat().format(population)}</span>
        </p>
        <p>
          Region:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
        </p>
        <p>
          Capital:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
        </p>
      </div>
    </div>
  )
}

export default Country
