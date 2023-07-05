import React, { useState, useEffect } from 'react';
import Loader from '../components/loader';
import { useParams, Link } from 'react-router-dom';
import { GameCategoriesDataView } from '../services/api';

const GameCategories = () => {
  const { gametype } = useParams();
  const [gamesx, setGamesx] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GameCategoriesDataView(gametype) ;
        setGamesx(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [gametype]);

  return (
    <>
      <Loader />
      <div className='main'>
        <div className='game-container'>
          {gamesx.map((game) => (
            <div className="card" key={game.id}>
              <div className="front">
                <img className="img" src={game.gamecover} alt="Game-img" />
              </div>
              <div className="back">
                <div className="contents">
                  <h2 className="title">{game.gamename}</h2>
                  <p className="text">{game.gamedeveloper}</p>
                  <h3 className="subtitle">₹ {game.gameprice}</h3>
                  <div className='socials'>
                    <Link to={`/game/${game.id}`}>
                      <button className="rounded-button login-cta"> View </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameCategories;
