import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function GameNav() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);

    const userlogout = () => {
        if (isLoggedIn) {
            navigate('/login');
            Cookies.remove('isLoggedIn');
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    };

    const routegame = () => {
        navigate('/dashboard/games');
    };
    const routeadd = () =>{
        navigate('/dashboard/games/add')
    }
    return (
        <>
            <div className='game-sidenav'>
                <div className='game-nav-container'>
                    <button className='game-nav-button' onClick={routegame}>
                        View Games
                    </button>
                    <button className='game-nav-button' onClick={routeadd}>Add Game</button>
                    <button className='game-nav-logout-button' onClick={userlogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}