import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="profile-container">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Your Profile"
                    className="profile-picture"
                />
                <h1>Hello, I'm William Ayers-Moran</h1>
                <p>
                    I am a Computer Science student from the University of Minnesota.
                    A few things I am passionate about are Software Engineering and Climbing!
                    Welcome to my portfolio website!
                </p>
                <a
                    href="https://www.linkedin.com/in/william-ayers-moran-865323271/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-button"
                >
                    Connect with me on LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Home;
