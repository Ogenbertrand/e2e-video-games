import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import './searchBar.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search/${searchQuery}`;
    }
    setSearchQuery('');
  }
  
  return (
    <div className="search">
      <form>
        <div className="search-container">
          <input
            type="text"
            name="query"
            placeholder="search games..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearch}/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;