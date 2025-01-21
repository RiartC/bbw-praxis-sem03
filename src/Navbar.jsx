import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Fight Factory</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">Über Uns</Link>
                <Link to="/equipment" className="nav-link">Ausstattung</Link>
                <Link to="/trainer" className="nav-link">Trainer</Link>
                <Link to="/contact" className="nav-link">Kontakt</Link>
            </div>
        </div>
    );
}

export default Navbar;
