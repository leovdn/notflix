import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import AvatarImg from '../../assets/img/avatar.jpg';
import './Menu.css';
import Button from '../Button';

function Menu() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 64) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleShow();
      });
    };
  }, []);

  return (
    <nav className={`Menu ${show && 'Menu-dark'}`}>
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <div className="menu-links">
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
        <a href="https://github.com/leovdn" target="_blank" rel="noopener noreferrer">
          <img className="Avatar" src={AvatarImg} alt="Profile" />
        </a>
      </div>
    </nav>
  );
}

export default Menu;
