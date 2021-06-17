import React, { useState, useEffect } from "react";
import axios from "axios";
import './Banner.css';
import './Responsive.css';
import Logo from "../../images/Logo.png"
import Loop from "../../images/loop.png"
import uCurv from "../../images/u-curv.png"
import {Button} from "../../components"
const Banner = () => {
    const [lineNav, setlineNav] = useState(false);
    const [lineNav1, setlineNav1] = useState(false);
    const [lineNav2, setlineNav2] = useState(false);
    const [lineNav3, setlineNav3] = useState(false);
    const [lineNav4, setlineNav4] = useState(false);
    const [lineNav5, setlineNav5] = useState(false);

    window.onscroll = ()=>{
        let height = document.documentElement.scrollTop
        let botao = document.querySelectorAll(".option")
        if (height <800){
            setlineNav1(false)
            if(lineNav===false){
                botao[0].appendChild(document.querySelector(".lineNav")) 
                setlineNav(true)
            }
        }
        else if (height >=800 && height <=1500){
            setlineNav(false)
            setlineNav2(false)
            if (lineNav1 === false){
                botao[1].appendChild(document.querySelector(".lineNav"))  
                setlineNav1(true)
            }
        }
        else if (height >1500 && height <=2200 ){
            setlineNav1(false)
            setlineNav3(false)
            if(lineNav2===false){
                botao[2].appendChild(document.querySelector(".lineNav")) 
                setlineNav2(true)
            }
        }
        else if (height >2200 && height <=2900 ){
            setlineNav2(false)
            setlineNav4(false)
            if(lineNav3===false){
                botao[3].appendChild(document.querySelector(".lineNav")) 
                setlineNav3(true)
            }
        }
        else if (height >2900 && height <=3600){
            setlineNav3(false)
            setlineNav5(false)
            if(lineNav4===false){
                botao[4].appendChild(document.querySelector(".lineNav")) 
                setlineNav4(true)
            }
        }
        else if (height >3600 && height <=4300 ){
            setlineNav4(false)
            if(lineNav5===false){
                botao[5].appendChild(document.querySelector(".lineNav")) 
                setlineNav5(true)
            }
        }

    }
    
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        if(!click){
        document.body.style.overflowY= "hidden"
        } else{ document.body.style.overflowY= "auto"}
    }

    const closeMobileMenu = () =>{
        setClick(false);
        document.body.style.overflowY= "auto"
    };

    const[banners, setBanner] = useState([])
    const loadBanner = async () => {
        const res = await axios.get('http://localhost:3001/api/banner');
        let Objeto = {}
        Objeto["text"]= res.data[0].text
        Objeto["title"] = res.data[0].title.url
        Objeto["image"] = res.data[0].imageBanner.url
        setBanner(Objeto)
    };

    useEffect(() => {
        loadBanner();
      }, []);
    return (
        <>
            <div className= "header">
                <div className="nav">
                    <div className="logo-container">
                        <img className="logo" src={Logo}/>
                    </div>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#banner">iJunior Loop</a>
                        <div className="lineNav"></div>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Entrega Modular</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Análise de Requisitos</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Desenvovimento</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Quem Somos</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Contato</a>
                        </li>
                        <li className="option wave">   
                        </li>
                    </ul>
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
                <div id="banner">
                    <div className="banner-text">
                        <img src={banners.title}/>
                        <p>{banners.text}</p>
                        <div className="button">
                            <Button text = "Entre em Contato" Width={158} Height = {44}/>
                        </div>
                    </div>
                    <div className="banner-image" style = {{ backgroundImage: `url(${banners.image})`}}></div>
                </div>
            </div>
        </>

    )

}

export default Banner;