import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GameView } from '../services/api';
import Carousel from '../components/Carousel';
import '../assets/css/Parallelx.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Star } from 'lucide-react';

export default function GameViewPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const fetchGame = async () => {
      try {
        const { data } = await GameView(id);
        setGame(data);
      } catch (error) {
        console.error('Error retrieving game:', error);
      }
    };
    fetchGame();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);
  if (!game) {
    return
    <div>
    </div>
  }
  const carouselImages = [
    { image: game.coverurl1 },
    { image: game.coverurl2 },
    { image: game.coverurl3 },
  ];
  const buygame = () => {
    toast.warning('Currently Unavailable !', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const backnavigation = () => {
    navigate(-1);
  }
  return (
    <div className='main'>
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }} className="banner container">
        <div className="game-content">
          <div className='cardx'>
            <img src={game.gamecover} alt="Game-img" />
          </div>
          <div className='game-data'>
            <h2 className="game-title">{game.gamename}</h2>
            <h3 className="subtitle">{game.gametype}</h3>
            <p className="game-dev">{game.gamedeveloper}</p>
            <button className="game-button" onClick={buygame}>
              Buy @ {game.gameprice} INR
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='game-btm'>
          <div className='game-desc'>
            <h3 className="subtitle">{game.gamedesc}</h3>
            <div className='game-controls'>
              <button className="button-m-x game-back" onClick={backnavigation}>
                <span>Back</span>
                <div className="top orange"></div>
                <div className="left orange"></div>
                <div className="bottom orange"></div>
                <div className="right orange"></div>
              </button>
              <h3 className="game-sub ">Relese year : <span className='game-rel'>{game.releaseyear}</span></h3>
              <h3 className="game-sub ml-1">Developer : <span className='game-rel'>{game.gamedeveloper}</span></h3>
              {/* <h3 className="game-sub ml-1">Publisher : <span className='game-rel'>{game.auth.username}</span></h3>  */}
              
            </div>
          </div>
          <div className='game-rating'><Star strokeWidth={2.5} /><h3 className="subtitle">{game.gameratings} / 10</h3></div>
        </div>
      </section>
      <section className="container">
        <Carousel images={carouselImages} />
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div>
  );
}
