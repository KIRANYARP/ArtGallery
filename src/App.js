import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Create this file for custom styling

import Home from './components/Home';
import Gallery from './components/Gallery';
import Artist from './components/Artist';
import Exhibition from './components/Exhibition';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Art Gallery</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/artist">Artists</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/exhibition">Exhibitions</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/exhibition" element={<Exhibition />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
