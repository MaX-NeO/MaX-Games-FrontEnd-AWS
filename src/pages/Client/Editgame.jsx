import React from 'react'
import GameNav from './Layout/UserLeftbar'
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
        e.preventDefault();
        setGame((prevGame) => ({ ...prevGame, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const toaster = toast.loading("Updating Game ...", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            isLoading: false
        })
        try {
            await GameUpdate(id, game);
            toast.update(toaster, { render: "Game Updated !", type: "success", isLoading: false });
            setTimeout(() => {
                navigate("/dashboard/games");
            }, 2000);
        } catch (err) {
            toast.update(toaster, { render: "Failed to update Game !", type: "error", isLoading: false });
        }
    };
console.log(game)
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
                            <span className="select-dropdown">
                                <select name="gametype" value={game.gametype} onChange={handleChange}>
                                    <option value="Action">Action</option>
                                    <option value="OpenWorld">OpenWorld</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Racing">Racing</option>
                                    <option value="Fighting">Fighting</option>
                                    <option value="Survival">Survival</option>
                                </select>
                            </span>
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
                theme="dark" />
        </div>
    );
}
