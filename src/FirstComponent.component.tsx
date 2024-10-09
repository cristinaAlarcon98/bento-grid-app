import React from 'react';
import createPostImage from './assets/images/illustration-create-post.jpg';
import './styles.css';

const FirstComponent = () => {
    return (
        <div className="first-container">
            <p style={{ color: 'black' }}>
                Create and schedule content quicker
            </p>
            <img className='create-post-image' src={createPostImage} alt='create post' />
        </div>
    );
};

export default FirstComponent;
