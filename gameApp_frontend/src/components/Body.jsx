import React, { useState, useEffect } from 'react';
import './Body.css';

import GameList from '../assets/images/yo.webp';
import Adventure from '../assets/images/adventure.webp';
import RPG from '../assets/images/rpg.webp';
import Strategy from '../assets/images/strategy.webp';
import Puzzle from '../assets/images/puzzel.webp';
import Casual from '../assets/images/casual.webp';
import Indie from '../assets/images/indie.webp';
import Sport from '../assets/images/sport.webp';

function Body({ games, searchQuery, onSearch }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    filterGames();
  }, [games, selectedGenre, searchQuery]);

  const filterGames = () => {
    // Filter the games based on the selected genre and search query
    const filtered = games.filter(game => {
      if (selectedGenre && game.genre !== selectedGenre) {
        return false;
      }
      if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
    setFilteredGames(filtered);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="body">
      <section className="left-content">
        <h1 className="title">Genres</h1>
        <ul>
          <li onClick={() => handleGenreClick('Fighting')}>
            <img src={GameList} alt="GameList" />Fighting
          </li>
          <li onClick={() => handleGenreClick('Casual')}>
            <img src={Casual} alt="Casual" />Casual
          </li>
          <li onClick={() => handleGenreClick('RPG')}>
            <img src={RPG} alt="RPG" />RPG
          </li>
          <li onClick={() => handleGenreClick('Adventure')}>
            <img src={Adventure} alt="Adventure" />Adventure
          </li>
          <li onClick={() => handleGenreClick('Indie')}>
            <img src={Indie} alt="Indie" />Indie
          </li>
          <li onClick={() => handleGenreClick('Strategy')}>
            <img src={Strategy} alt="Strategy" />Strategy
          </li>
          <li onClick={() => handleGenreClick('Puzzle')}>
            <img src={Puzzle} alt="Puzzle" />Puzzle
          </li>
          <li onClick={() => handleGenreClick('Shooter')}>
            <img src={Sport} alt="Shooter" />Sport
          </li>
        </ul>
      </section>
      <section className="right-content">
        <h1 className="title">{selectedGenre ? `${selectedGenre} Games` : 'All Games'}</h1>
        <ul>
          {filteredGames.map((game, index) => (
            <li key={index}>{game.title}</li>
          ))}
        </ul>
        <button className='Order by' type='text' aria-placeholder='Order by'></button>
      </section>
    </div>
  );
}

export default Body;