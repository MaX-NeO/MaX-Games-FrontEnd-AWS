import React, { useState, useEffect } from 'react';
import '../assets/css/Category.css';
import { Link } from 'react-router-dom';
import { GameCategoriesData } from '../services/api';

const Category = () => {
  const [gameCategories, setGameCategories] = useState([]);

  useEffect(() => {
    const fetchGameCategories = async () => {
      try {
        const response = await GameCategoriesData() ;
        setGameCategories(response.data);
      } catch (error) {
        console.error('Error fetching game categories:', error);
      }
    };

    fetchGameCategories();
  }, []);

  return (
    <>
      <div className="category-card-container">
        {gameCategories.map((category, index) => (
          <Link to={`/game/categories/${category}`} key={index}>
            <div className="category-card-card">
              <h2 className="category-card-title">{category}</h2>
              <p className="category-card-data">[view]</p>
              <div className="category-card-pic" />
              <span className="category-card-button" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
