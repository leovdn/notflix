import React from 'react';
import { FooterBase } from './styles';
import Github from '../../assets/img/github.png';
import Linkedin from '../../assets/img/linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <div className="social">
        <a href="https://github.com/leovdn">
          <img src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/leovdn/">
          <img src={Linkedin} />
        </a>
      </div>
      <p>Desenvolvido por Leonardo Dantas na Imersão React da Alura</p>
    </FooterBase>
  );
}

export default Footer;
