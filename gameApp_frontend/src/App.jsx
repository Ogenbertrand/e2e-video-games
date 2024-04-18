import React, { useState } from 'react';

import Body from './components/Body';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import Themecolor from './components/Themecolor';
import { Link } from 'react-router-dom';

function App() {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (searchTerm) => {
    const latestGames = await fetchLatestGames();
    // Filter the games based on the search term or any other criteria
    const filteredGames = latestGames.filter(game => game.title.includes(searchTerm));
    setGames(filteredGames);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  async function loadData() {
    const result = await api.get('/all');
    console.log(result.data);
  }

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Themecolor />
        <Link to="/login"    
      style={{
        textDecoration: 'none',
        float: 'right',
        position: 'fixed',
        top: '10px',
        right: '10px',
        borderRadius: '5px',
        padding: '10px 15px',
        backgroundColor: 'blue'
      }}
        >Login</Link>
      < Body games={games} />
    </>
  );
}

export default App;