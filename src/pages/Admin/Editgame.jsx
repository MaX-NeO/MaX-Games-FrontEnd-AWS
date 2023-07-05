import React from 'react'
import GameNav from './Nav/Gamenav'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GameView, GameUpdate } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditGame() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [game, setGame] = useState({
        gamename: "",
        releaseyear: 0,
        gamedeveloper: "",
        gametype: "",
        gameratings: 0,
        gameprice: 0,
        gamecover: "",
        gamedesc: "",
        coverurl1: "",
        coverurl2: "",
        coverurl3: "",
    });

    useEffect(() => {
        loadGame();
    }, []);

    const loadGame = async () => {
        try {
            const res = await GameView(id);
            setGame(res.data);
        } catch (err) {
            console.err("Failed to load game:", err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGame((prevGame) => ({
            ...prevGame,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await GameUpdate(id, game);
            // toast.info
            toast.info('Game Update !', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => {
                navigate("/dashboard/games");
            }, 1500);

        } catch (err) {
            console.error("Failed to update game:", err);
        }
    };

    return (
        <div className='game-x-main'>
            <GameNav />
            <div className='game-actions'>
                <h1 className="game-page-title">Edit Games </h1>

                <div className="data-x-game-container">
                    <form onSubmit={handleSubmit} className='input-group'>
                        <label>
                            Game Name :
                            <input type="text" name="gamename" value={game.gamename} onChange={handleChange} />
                        </label>
                        <label>
                            Release Year :
                            <input type="number" name="releaseyear" value={game.releaseyear} onChange={handleChange} />
                        </label>
                        <label>
                            Developer :
                            <input type="text" name="gamedeveloper" value={game.gamedeveloper} onChange={handleChange} />
                        </label>
                        <label>
                            Type :
                            <input type="text" name="gametype" value={game.gametype} onChange={handleChange} />
                        </label>
                        <label>
                            Ratings :
                            <input type="number" name="gameratings" value={game.gameratings} onChange={handleChange} />
                        </label>
                        <label>
                            Price :
                            <input type="number" name="gameprice" value={game.gameprice} onChange={handleChange} required />
                        </label>
                        <label>
                            Describption :
                            <input type="text" name="gamedesc" value={game.gamedesc} onChange={handleChange} />
                        </label>
                        <label>
                            Cover Image:
                            <input type="text" name="gamecover" value={game.gamecover} onChange={handleChange} />
                        </label>
                        <label>
                            Cover URL 1 :
                            <input type="text" name="coverurl1" value={game.coverurl1} onChange={handleChange} />
                        </label>
                        <label>
                            Cover URL 2 :
                            <input type="text" name="coverurl2" value={game.coverurl2} onChange={handleChange} />
                        </label>
                        <label>
                            Cover URL 3 :
                            <input type="text" name="coverurl3" value={game.coverurl3} onChange={handleChange} />
                        </label>

                        <button type="submit" className='game-nav-button'>Update</button>
                    </form>
                </div>
            </div>

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
                theme="dark"
            />
        </div>
    );
}
