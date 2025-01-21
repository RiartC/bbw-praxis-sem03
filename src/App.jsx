import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Training from './Training';
import About from './AboutUs';
import Contact from './Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <nav className="navbar">
                        <ul className="navbar-menu">
                            <li className="navbar-item"><h3>Fight Factory</h3></li>
                            <li className="navbar-item"><Link to="/">Home</Link></li>
                            <li className="navbar-item"><Link to="/training">Training</Link></li>
                            <li className="navbar-item"><Link to="/about">Über uns</Link></li>
                            <li className="navbar-item"><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </nav>
                </header>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
