import GameNav from "./Layout/UserLeftbar";
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date());
        };
        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    const Greeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) {
            return 'Good morning !';
        } else if (hour >= 12 && hour < 18) {
            return 'Good afternoon !';
        } else {
            return 'Good evening !';
        }
    };
    return (
        <div className='game-x-main'>
            <GameNav />
            <div className='game-actions'>
                <h1 className="game-page-title">{Greeting()}</h1>
                <div className='game-x-data w-flex-wrapper '>
                    <div className="x-welcome-conteiner">
                        <div className="x-data-content">
                            <div className="x-left-bar"></div>
                            <div className="x-data-left">
                                {localStorage.getItem('Usernamex')}
                            </div>
                            <ul className="x-data-right">
                                <li className="x-data-r">Hello</li>
                                <li className="x-data-r">Hola</li>
                                <li className="x-data-r">Ciao</li>
                            </ul>
                            <div className="x-right-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
