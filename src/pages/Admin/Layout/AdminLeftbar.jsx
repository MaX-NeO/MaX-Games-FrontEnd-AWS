import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function AdminNav() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isAdmin') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/Admin/login');
        }
      }, [isLoggedIn, navigate]);

    const userlogout = () => {
        if (isLoggedIn) {
            navigate('/Admin/login');
            Cookies.remove('isAdmin');
            setIsLoggedIn(false);
        } else {
            navigate('/Admin/login');
        }
    };

    const routegame = () => {
        navigate('/Admin/dashboard');
    };
    const routeadd = () =>{
        navigate('/Admin/games/add')
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