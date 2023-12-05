import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function GameNav() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();


    const userlogout = () => {
        Cookies.remove('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login');
    };

    const routegame = () => {
        navigate('/dashboard/games');
    };
    const routeadd = () => {
        navigate('/dashboard/games/add')
    }
    return (
        <>
            <div className='game-sidenav'>
                <div className='game-nav-container'>
                    {/* <button className='game-nav-button' onClick={routegame}>
                        View Games
                    </button> */}
                    <button className="button-m-x mb-1" onClick={routegame}>
                        <span>View Games</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1" onClick={routeadd}>
                        <span>Add Game</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1 game-nav-logout-button" onClick={userlogout}>
                        <span>Logout</span>
                        <div className="top red"></div>
                        <div className="left red"></div>
                        <div className="bottom red"></div>
                        <div className="right red"></div>
                    </button>
                    {/* <button className='game-nav-button' onClick={routeadd}>Add Game</button> */}
                    {/* <button className='game-nav-logout-button' onClick={userlogout}>
                        Logout
                    </button> */}
                </div>
            </div>
        </>
    );
}