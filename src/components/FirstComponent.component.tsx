import React from 'react';
import createPostImage from '../assets/images/illustration-create-post.jpg';
import './styles.css'; // Import the CSS file

const FirstComponent = () => {
    return (
        <div className="first-container">
            <p>
                Create and schedule content quicker
            </p>
            <img src={createPostImage} alt='create post' className="image" />
        </div>
    );
};

export default FirstComponent;
