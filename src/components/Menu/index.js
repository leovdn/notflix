import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';


function Menu() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 64) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow();
      });
    };
  }, []);

  return (
    <nav className={`Menu ${show && "Menu-dark"}`}>
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;