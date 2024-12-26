import React from 'react';
import Header from './components/Header';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="home">
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is the starting point of my portfolio!</p>
                </section>
            </main>
        </div>
    );
}

export default App;
