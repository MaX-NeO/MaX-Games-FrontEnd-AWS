import React, { useState, useEffect } from 'react';
import '../assets/css/Slide.css';
import { GameCover } from '../services/api';

const Slide = () => {
    const [gameCovers, setGameCovers] = useState([]);
    const [activeOption, setActiveOption] = useState(0);

    const handleOptionClick = (index) => {
        if (index !== activeOption) {
            setActiveOption(index);
        }
    };

    useEffect(() => {
        const getGameCovers = async () => {
            try {
                const response = await GameCover(); 
                setGameCovers(response.data);
            } catch (error) {
                console.error('Error fetching game covers:', error);
            }
        };

        getGameCovers();
    }, []); 

    useEffect(() => {
        const totalOptions = gameCovers.length;
        const timer = setTimeout(() => {
            const nextOption = (activeOption + 1) % totalOptions;
            setActiveOption(nextOption);
        }, 3000);

        return () => clearTimeout(timer);
    }, [activeOption, gameCovers]); 

    return (
        <div className="options">
            {gameCovers.map((cover, index) => (
                <Option
                    key={index}
                    GameCoverImg={cover}
                    onClick={() => handleOptionClick(index)}
                    className={activeOption === index ? 'active' : ''}
                />
            ))}
        </div>
    );
};

const Option = ({ GameCoverImg, onClick, className }) => (
    <div className={`option ${className}`} style={{ '--GameCoverx': `url(${GameCoverImg})` }} onClick={onClick}>
        <div className="shadow"></div>
        <div className="label">
            <div className="icon">
                <span className="material-symbols-outlined">
                    sports_esports
                </span>
            </div>
        </div>
    </div>
);

export default Slide;
