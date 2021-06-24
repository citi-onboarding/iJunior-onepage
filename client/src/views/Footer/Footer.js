import React from 'react';
import './Footer.css';
import './FooterResponsive.css';
import Logo from "../../images/logo.png"
import Seta from "../../images/seta-direita.png"


const Footer = () => {

    const scrollTop = ()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={Logo}></img>
            </div>
            <div className="footer-right">
                <div className="footer-button"> 
                    <div className="button-scroll-top" onClick={scrollTop}>
                        <img src={Seta}></img>
                        <p>Volta para o topo</p>
                    </div>
                    <p className="footer-button-p" >Made with ❤ and &lt;/&gt; by CITI</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;
