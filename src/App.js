import Header from './Header';
import Country from './Country';
import CountryDetails from './CountryDetails';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div className='app_body'>
              <div className='inputs'>
                <div className='search_input'>
                  <SearchIcon />
                  <input type='text' placeholder='Search for a country...' />
                </div>
                <div className='select_region'>
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
                <Country />
              </div>
            </div>
          }
        />
        <Route path='country-details' element={<CountryDetails />}/>
      </Routes>
    </div>
  )
}

export default App
