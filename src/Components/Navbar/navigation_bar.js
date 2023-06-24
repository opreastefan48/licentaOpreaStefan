import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <nav ref={navRef}>
        <Link to="licentaOpreaStefan/home"> Home </Link>
        <Link to="licentaOpreaStefan/probleme"> Probleme </Link>
        <Link to="licentaOpreaStefan/cules"> Adauga Cantitate Culeasa </Link>
        <Link to="licentaOpreaStefan/total"> Total cules </Link>
        <Link to="licentaOpreaStefan/fertilizare"> Tabele Fertilizare </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        {isLoggedIn ? (
          <Button onClick={logout} variant="danger">LOGOUT</Button>
        ) : (
          <Button onClick={login} variant="primary">LOGIN</Button>
        )}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav_bar;
