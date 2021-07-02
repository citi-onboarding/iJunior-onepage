import React from 'react';
import './Footer.css';
import './FooterResponsive.css';
import Logo from "../../images/Logo.png"
import Seta from "../../images/seta-direita.png"


function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="footer">
      <div className="footer-left">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-right">
        <div className="footer-button">
          <div className="button-scroll-top" onClick={scrollTop}>
            <img src={Seta} alt="seta para cima" />
            <p>Volta para o topo</p>
          </div>
          <p className="footer-button-p" >Made with &lt;/&gt; and ❤ by CITI</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
