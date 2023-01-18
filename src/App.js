import Header from './Header';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <div className="inputs">
          <div className="search_input">
            <SearchIcon />
            <input type="text" placeholder='Search for a country...' />
          </div>
          <div className="select_region">
            <select>
              <option value="">Filter by Region</option>
              <option value="">Africa</option>
              <option value="">America</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
              <option value="">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
