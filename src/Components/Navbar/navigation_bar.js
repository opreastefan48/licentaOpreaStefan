import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./navbar.css";

function Nav_bar() {
  const navRef = useRef();

  function logout() {
    window.localStorage.setItem('isloggedin', 'false');
    window.location.href = '/login';
  }

  function login() {
    window.location.href = '/login';
  }

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const isLoggedIn = window.localStorage.getItem('isloggedin') === 'true';

  return (
    <header>
      <h3>Afine Oprea</h3>
      <Router> {/* Wrap the component with Router */}
        <nav ref={navRef}>
          <Link to="/home"> Home </Link>
          <Link to="/probleme"> Probleme </Link>
          <Link to="/cules"> Adauga Cantitate Culeasa </Link>
          <Link to="/total"> Total cules </Link>
          <Link to="/fertilizare"> Tabele Fertilizare </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          {isLoggedIn ? (
            <Button onClick={logout} variant="danger">LOGOUT</Button>
          ) : (
            <Button onClick={login} variant="primary">LOGIN</Button>
          )}
        </nav>
      </Router>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav_bar;
