import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  window.addEventListener("scroll", function () {
    const linkBorder = document.getElementById("nav-link").style;
    if (window.scrollY >= 0 && window.scrollY < 500) {
      linkBorder.left = "23.4vw";
      linkBorder.width = "7.863vw";
    }

    if (window.scrollY > 500 && window.scrollY < 1200) {
      linkBorder.left = "33vw";
      linkBorder.width = "10.85vw";
    }

    if (window.scrollY > 1200 && window.scrollY < 1900) {
      linkBorder.left = "45.8vw";
      linkBorder.width = "13.7vw";
    }

    if (window.scrollY > 1900 && window.scrollY < 2500) {
      linkBorder.left = "61.5vw";
      linkBorder.width = "10.9vw";
    }

    if (window.scrollY > 2500 && window.scrollY < 3200) {
      linkBorder.left = "74.6vw";
      linkBorder.width = "8.7vw";
    }

    if (window.scrollY > 3200) {
      linkBorder.left = "85.3vw";
      linkBorder.width = "5.2vw";
    }
  });

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  const closeMobileMenu = () => {
    setClick(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option">
              <a onClick={closeMobileMenu} href="#ijuniorloop">
                iJunior Loop
              </a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#EntregaModular">
                Entrega Modular
              </a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#AnaliseDeRequisitos">
                Análise de Requisitos
              </a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#Desenvolvimento">
                Desenvovimento
              </a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#QuemSomos">
                Quem Somos
              </a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#Contato">
                Contato
              </a>
            </li>
            <li className="option wave"></li>
          </ul>
          <div id="nav-link"></div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <>
              <div className="menu-icon before">
                <span id="before-1"></span>
                <span id="before-2"></span>
              </div>
            </>
          ) : (
            <>
              <div className="menu-icon after">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
