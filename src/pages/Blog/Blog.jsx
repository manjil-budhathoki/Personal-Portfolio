// src/pages/blog/Blog.jsx
import React, { useState, useEffect } from 'react';
import './Blog.css';
import BlogPost from '../../components/BlogPost';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const apiUrl = 'https://66d9547c4ad2f6b8ed543670.mockapi.io/blog';

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <section className="blog section">
            <h2 className="section__title">My <span>Blog</span></h2>

            {posts.length > 0 ? (
                <div className="blog__container container grid">
                    {posts.map((post) => (
                        <BlogPost key={post.id} {...post} />
                    ))}
                </div>
            ) : (
                <p>Loading blog posts...</p>
            )}
        </section>
    );
};

export default Blog;