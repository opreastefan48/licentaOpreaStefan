import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from 'react-bootstrap/Button'
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
        <a href="/home"> Home </a>
        <a href="/probleme"> Probleme </a>
        <a href="/cules"> Adauga Cantitate Culeasa </a>
        <a href="/total"> Total cules </a>
        <a href="/fertilizare"> Tabele Fertilizare </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        {isLoggedIn && (
          <Button onClick={logout} variant="danger">LOGOUT</Button>
        )}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav_bar;
