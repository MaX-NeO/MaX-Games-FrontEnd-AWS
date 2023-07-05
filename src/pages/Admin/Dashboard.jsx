import GameNav from "./Nav/Gamenav";
import { useEffect, useState } from "react";
import { Gamesx, GameDelete } from "../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [gamesx, setGamesx] = useState([]);

    useEffect(() => {
        loadGames();
    }, []);

    const loadGames = () => {
        Gamesx().then((res) => {
            setGamesx(res.data);
        });
    };

    const handleDeleteGame = (gameId, gameName) => {
        GameDelete(gameId).then(() => {
            loadGames();
            toast.success(`${gameName} Deleted !`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }).catch((error) => {
            toast.error("Failed to delete the game.", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };

    return (
        <div className='game-x-main'>
            <GameNav />
            <div className='game-actions'>
                <h1 className="game-page-title">Games Dashboard</h1>

                <div className='game-x-data'>
                    <div>
                        <div className="tbl-header">
                            <table cellPadding={0} cellSpacing={0} border={0}>
                                <thead>
                                    <tr>
                                        <th>Game Name</th>
                                        <th>Developer</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="tbl-content">
                            <table cellPadding={0} cellSpacing={0} border={0}>
                                <tbody>
                                    {gamesx.map((game) => (
                                        <tr key={game.id}>
                                            <td>{game.gamename}</td>
                                            <td>{game.gamedeveloper}</td>
                                            <td>
                                                <Link to={`/dashboard/games/edit/${game.id}`}>
                                                    <button className="game-x-edit-btn">
                                                        <span className="material-symbols-outlined">
                                                            edit
                                                        </span>
                                                    </button>
                                                </Link>
                                                <button
                                                    className="game-x-delete-btn"
                                                    onClick={() => handleDeleteGame(game.id, game.gamename)}
                                                >
                                                    <span className="material-symbols-outlined">
                                                        delete
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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
