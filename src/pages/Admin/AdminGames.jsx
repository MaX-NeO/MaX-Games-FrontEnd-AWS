import AdminNav from "./Layout/AdminLeftbar";
import { useEffect, useState } from "react";
import { Gamesx, GameDelete, GameStatus, GamePin } from "../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Settings, ShieldX, XCircle, ShieldCheck, Star, ScanSearch } from "lucide-react";

export default function AdminDashboard() {
    const [gamesx, setGamesx] = useState([]);

    const handleGameStatus = (id, enable) => {
        const toaster = toast.loading("Processing ...", {
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
        GameStatus(id, !enable)
            .then(response => {
                toast.update(toaster, { render: `${response.data}`, type: "success", isLoading: false });
                loadGames();
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    const handleGamePin = (id, enable) => {
        console.log(enable);
        const toaster = toast.loading("Processing ...", {
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
        GamePin(id, !enable)
            .then(response => {
                toast.update(toaster, { render: `${response.data}`, type: "success", isLoading: false });
                loadGames();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const handleDeleteGame = (gameId, gameName) => {

        let ct = "Are you want to delete " + gameName + " ?";
        if (confirm(ct)) {
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

    useEffect(() => {
        loadGames();
    }, []);
    const loadGames = () => {
        Gamesx().then((res) => {
            setGamesx(res.data);
        });
    };
    console.log(gamesx)
    return (
        <div className='game-x-main'>
            <AdminNav />
            <div className='game-actions'>
                <h1 className="game-page-title">Games</h1>
                <div className='game-x-data'>
                    <div>
                        <div className="tbl-header">
                            <table cellPadding={0} cellSpacing={0} border={0}>
                                <thead>
                                    <tr>
                                        <th>Game Name</th>
                                        <th>Developer</th>
                                        <th>Publisher</th>
                                        <th>Visiblity</th>
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
                                                <td>{game.auth.username}</td>
                                                <td>
                                                    <Link to={`/Admin/game/view/${game.id}`}>
                                                        <button
                                                            className='game-x-btn-examine'>
                                                            <ScanSearch size={28} />
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className={game.gameisenabled ? 'game-x-btn-disable' : 'game-x-btn-enable'}
                                                        onClick={() => handleGameStatus(game.id, game.gameisenabled)}>
                                                        {
                                                            game.gameisenabled ? <ShieldX size={28} /> : <ShieldCheck size={28} />
                                                        }
                                                    </button>
                                                    <button
                                                        className={game.gameispinned ? 'game-x-btn-pinned' : 'game-x-btn-unpinned'}
                                                        onClick={() => handleGamePin(game.id, game.gameispinned)}>
                                                        <Star size={28} />
                                                    </button>

                                                </td>
                                                <td>
                                                    <Link to={`/Admin/games/edit/${game.id}`}>
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
                theme="dark"
            />
        </div>
    );
}
