import GameNav from "./Layout/UserLeftbar";
import { useEffect, useState } from "react";
import { GameDelete, userGamesx } from "../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Settings, XCircle } from "lucide-react";

export default function Dashboard() {
    const [gamesx, setGamesx] = useState([]);
    const uidx = localStorage.getItem('Useridx');
    useEffect(() => {
        loadGames();
    }, []);
    const loadGames = () => {
        userGamesx(uidx)
            .then((res) => {
                setGamesx(res.data);
            })
            .catch((error) => {
                console.error("Failed to load games:", error);
            });
    };
    const handleDeleteGame = (gameId, gameName) => {
        let ct = "Are you want to delete "+gameName + " ?";
        if(confirm(ct)){
            const toaster = toast.loading("Deleting Game ...", {
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
            GameDelete(gameId)
            .then(() => {
                loadGames();
                toast.update(toaster, { render: "Game Deleted !", type: "success", isLoading: false });
            })
            .catch((error) => {
                toast.update(toaster, { render: "Failed to delete the Game !", type: "error", isLoading: false });
            });
        }
    };
    return (
        <div className='game-x-main'>
            <GameNav />
            <div className='game-actions'>
                <h1 className="game-page-title">My Games</h1>
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
                                    {Array.isArray(gamesx) && gamesx.length > 0 ? (
                                        gamesx.map((game) => (
                                            <tr key={game.id}>
                                                <td>{game.gamename}</td>
                                                <td>{game.gamedeveloper}</td>
                                                <td>
                                                    <Link to={`/dashboard/games/edit/${game.id}`}>
                                                        <button className="game-x-edit-btn">
                                                            <span><Settings size={28} /></span>
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className="game-x-delete-btn"
                                                        onClick={() => handleDeleteGame(game.id, game.gamename)}>
                                                        <span><XCircle size={28} /></span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : gamesx.length == 0 ? (
                                        <tr>
                                            <td colSpan={10}>
                                                <div className="terminal-loader">
                                                    <div className="terminal-header">
                                                        <div className="terminal-title">Status</div>
                                                        <div className="terminal-controls">
                                                            <div className="control maximize"></div>
                                                        </div>
                                                    </div>
                                                    <div className="terminal-text">No Games Found .. </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <td colSpan={6}>
                                                <div className='sub-loader-x no-size-loader'>
                                                    <div className="loader-max">
                                                        <span className="load-max"></span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
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
                theme="dark" />
        </div>
    );
}
