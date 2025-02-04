// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;