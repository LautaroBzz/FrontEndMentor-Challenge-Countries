import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryDetails = () => {
  return (
    <div className="country_details">
      <button className="back">
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img src="https://flagcdn.com/gf.svg" alt="" />
        </div>
        <div className="info">
          <h2>Name</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Native Name:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Population:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Region:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Sub region:{' '}
                <span className='values'>asdasfafs</span>
              </p>
            </div>

            <div className="right_info">
            <p>
                Capital:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Top-level Domain:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Currencies:{' '}
                <span className='values'>asdasfafs</span>
              </p>
              <p>
                Languages:{' '}
                <span className='values'>asdasfafs</span>
              </p>
            </div>
          </div>

          Border Countries:
          <div className="border_country">
            <p>Test</p>
          </div>
          <div className="border_country">
            <p>Test</p>
          </div>
          <div className="border_country">
            <p>Test</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CountryDetails;
