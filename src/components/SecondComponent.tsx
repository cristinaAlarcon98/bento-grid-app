import React from 'react';
import starsImage from '../assets/images/illustration-five-stars.jpg';
import './styles.css'; // Import the CSS file

const SecondComponent = () => {
    return (
        <div className="second-container">
            <h1>
                Social Media 10X Faster with AI
            </h1>
            <img src={starsImage} alt='create post' className="image" />
            <p>
                Over 4,000 5-star reviews
            </p>
        </div>
    );
};

export default SecondComponent;
