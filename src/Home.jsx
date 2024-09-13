import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: For styling

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            
            <div className="search-bar">
                <p>Dev@DEAKIN </p>
                <input type="text" placeholder="Search..." />
                <button type="button">Post</button> {/* Post button does nothing */}
                <div className="actions">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </div>
            </div>

            
        </div>
    );
};

export default Home;
