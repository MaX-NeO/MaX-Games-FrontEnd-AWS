import React, { useState, useEffect } from 'react';
import { GamesActive } from '../services/api';
import { Link } from 'react-router-dom';

export default function Games() {
  const [gamesx, setGamesx] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GamesActive().then((res) => {
      setGamesx(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className='main'>
        {loading ? (
          <div className='sub-loader-x'>
            <div className="loader-max">
              <span className="load-max"></span>
            </div>
          </div>
        ) : (
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
                        <button className="button-m-x mb-1">
                          <span>View</span>
                          <div className="top green"></div>
                          <div className="left green"></div>
                          <div className="bottom green"></div>
                          <div className="right green"></div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
