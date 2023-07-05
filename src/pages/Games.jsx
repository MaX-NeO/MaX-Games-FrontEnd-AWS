import React from 'react'
import Loader from '../components/loader'
import { useState, useEffect } from 'react'
import { Gamesx } from '../services/api'
import { Link } from 'react-router-dom'
export default function Games() {
  const [gamesx, setGamesx]=useState([]);

  useEffect(() => {
    Gamesx().then((res) => {
      setGamesx(res.data);
    });
  }, []);
  return (
    <>
      <Loader />
      <div className='main'>

        <div className='game-container'>
        {gamesx.map((game) => (
          <div className="card" key={game.id}>
            <div className="front">
              <img className="img" src={game.gamecover} alt="Game-img"/>
              {/* <div className="contents">
              </div> */}
            </div>
            <div className="back">
              <div className="contents">
                
              <h2 className="title">{game.gamename}</h2>
                <p className="text">{game.gamedeveloper}</p>
                <h3 className="subtitle">₹ {game.gameprice}</h3>
                <div className='socials'>
                  <Link to={`/game/${game.id}`}><button className="rounded-button login-cta" > View </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
