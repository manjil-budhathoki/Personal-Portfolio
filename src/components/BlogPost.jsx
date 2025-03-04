// src/components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ img, title, description, show }) => {
    if (show) {  // Correct: Evaluate show directly as a boolean
        return (
            <div className="blog__post">
                <img src={img} alt={title} className="blog__img" />
                <div className="blog__content">
                    <h3 className="blog__title">{title}</h3>
                    <p className="blog__description">{description}</p>
                </div>
            </div>
        );
    }
    return null; // Don't render if show is false
};

export default BlogPost;