import GameNav from "./Layout/UserLeftbar";
import React, { useState, useEffect } from 'react';


export default function Dashboard() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date());
        };
        const intervalId = setInterval(updateTime, 60000);


    }, []);

    const Greeting = () => {
        const hour = currentTime.getHours();

        if (hour >= 5 && hour < 10) {
            return (
                <div className="game-page-title-x">
                    <div className="t-left">
                        Good Morning
                    </div>
                    <div className="t-right">
                        <div className="t-r-content">
                            <div icon="cloudy">
                                <span className="cloud"></span>
                                <span className="cloud"></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (hour >= 10 && hour < 16) {
            return (
                <div className="game-page-title-x">
                    <div className="t-left">
                        Good Afternoon
                    </div>
                    <div className="t-right">
                        <div className="t-r-content">
                            <div icon="sunny">
                                <span className="sun"></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (hour >= 16 && hour < 20) {
            return (
                <div className="game-page-title-x">
                    <div className="t-left">
                        Good Evening
                    </div>
                    <div className="t-right">
                        <div className="t-r-content">
                            <div icon="snowy">
                                <span className="snowman"></span>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="game-page-title-x">
                    <div className="t-left">
                        Good Night
                    </div>
                    <div className="t-right">
                        <div className="t-r-content">
                            <div icon="supermoon">
                                <span className="moon"></span>
                                <span className="meteor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className='game-x-main'>
            <GameNav />
            <div className='game-actions'>
                <Greeting />
                <div className='game-x-data w-flex-wrapper '>
                    <div className="x-welcome-conteiner">
                        <div className="x-data-content">
                            <div className="x-left-bar"></div>
                            <div className="x-data-left">
                                {localStorage.getItem('Usernamex')},
                            </div>
                            <ul className="x-data-right">
                                <li className="x-data-r">Hello !</li>
                                <li className="x-data-r">Hola !</li>
                                <li className="x-data-r">Ciao !</li>
                            </ul>
                            <div className="x-right-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
