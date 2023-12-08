import React, { useState, useEffect } from 'react';
import '../assets/css/Slide.css';
import { GameCover } from '../services/api';
import { Gamepad2 } from 'lucide-react';

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
            {Array.isArray(gameCovers) && gameCovers.length > 0 ? (
                gameCovers.map((cover, index) => (
                    <Option
                        key={index}
                        GameCoverImg={cover}
                        onClick={() => handleOptionClick(index)}
                        className={activeOption === index ? 'active' : ''}
                    />
                ))
            ) :
                (
                    <div className='sub-loader-x no-size-loader'>
                        <div className="loader-max">
                            <span className="load-max"></span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
const Option = ({ GameCoverImg, onClick, className }) => (
    <div className={`option ${className}`} style={{ '--GameCoverx': `url(${GameCoverImg})` }} onClick={onClick}>
        <div className="shadow"></div>
        <div className="label">
            {/* Game Name */}
            <div className="icon">
                <span>
                    <Gamepad2 size={24} />
                </span>
            </div>
        </div>
    </div>
);

export default Slide;
