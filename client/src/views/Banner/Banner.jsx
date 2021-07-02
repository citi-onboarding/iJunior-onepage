import React, { useState, useEffect } from "react";
import axios from "axios";
import './Banner.css';
import './BannerResponsive.css';
import Logo from "../../images/Logo.png"
import { Button } from "../../components"

const Banner = () => {
  window.addEventListener('scroll', function () {
    const linkBorder = document.getElementById("nav-link").style
    if (window.scrollY >= 0 && window.scrollY < 680) {
      linkBorder.left = "23.4vw";
      linkBorder.width = "7.863vw"
    }

    /*     if (window.scrollY > 680 && window.scrollY < 2200) {
          linkBorder.left = "33vw";
          linkBorder.width = "10.85vw"
        } */

    if (window.scrollY > 680 && window.scrollY < 1200) {
      linkBorder.left = "45.8vw";
      linkBorder.width = "13.7vw"
    }

    if (window.scrollY > 1200 && window.scrollY < 1800) {
      linkBorder.left = "61.5vw";
      linkBorder.width = "10.9vw"
    }

    if (window.scrollY > 1800 && window.scrollY < 2400) {
      linkBorder.left = "74.6vw";
      linkBorder.width = "8.7vw"
    }

    if (window.scrollY > 2400) {
      linkBorder.left = "85.3vw";
      linkBorder.width = "5.2vw"
    }
  })

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.style.overflowY = "hidden"
    } else { document.body.style.overflowY = "auto" }
  }

  const closeMobileMenu = () => {
    setClick(false);
    document.body.style.overflowY = "auto"
  };

  const [banners, setBanner] = useState([])
  const loadBanner = async () => {
    const res = await axios.get('https://ijuniorloop.herokuapp.com/api/banner');
    const Objeto = {
      text: res.data[0].text,
      title: res.data[0].title.url,
      image: res.data[0].imageBanner.url
    }
    setBanner(Objeto)
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option">
              <a onClick={closeMobileMenu} href="#ijuniorloop">iJunior Loop</a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#entregamodular">Entrega Modular</a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#analisederequisitos">Análise de Requisitos</a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#desenvolvimento">Desenvovimento</a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#quemsomos">Quem Somos</a>
            </li>
            <li className="option">
              <a onClick={closeMobileMenu} href="#contato">Contato</a>
            </li>
            <li className="option wave">
            </li>
          </ul>
          <div id="nav-link"></div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ?
            <>
              <div className="menu-icon before">
                <span id="before-1"></span>
                <span id="before-2"></span>
              </div>
            </>
            :
            <>
              <div className="menu-icon after">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          }
        </div>
      </div>
      <div>
        <div id="ijuniorloop">
          <div className="banner-text">
            <img src={banners.title} alt="logo iJunior Loop" />
            <p>{banners.text}</p>
            <div className="button">
              <a href="#contato"><Button text="Entre em Contato" Width={158} Height={44} /></a>
            </div>
          </div>
          <div className="banner-image" style={{ backgroundImage: `url(${banners.image})` }}></div>
        </div>
      </div>
    </>
  )
};

export default Banner;