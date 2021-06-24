import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import './AboutUsResponsive.css';
import Slider from "react-slick";
import {CardCarousel} from "../../components"
import esquerda from "../../images/seta_esquerda.png"
import direita from "../../images/seta_direita.png"
const AboutUs = () => {
    const [Square, setSquare] = useState(false)

    const loadButtonResponsive=()=>{
        var screen = document.body.clientWidth
        const ContDots = document.querySelectorAll(".slick-dots li").length - 2
        if (screen<480 && document.querySelector(".next")){
            setSquare(true)
            var calculo = 45 - (ContDots * 3.5)
            document.querySelector(".next").style.right = calculo + "vw"
            document.querySelector(".prev").style.left = calculo + "vw"
        }
        console.log(ContDots)
    }

    window.onresize = ()=>{
        if ( document.querySelector(".next")){
            var screen = document.body.clientWidth
            const ContDots = document.querySelectorAll(".slick-dots li").length - 2
            if(screen <480){
                setSquare(true)
                var calculo = 45 - (ContDots * 3.5)
                document.querySelector(".next").style.right = calculo + "vw"
                document.querySelector(".prev").style.left = calculo + "vw"
            } else{
                setSquare(false)
                document.querySelector(".next").style.right = "-5%"
                document.querySelector(".prev").style.left = "-5%"
            }
        }
    }


    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <img src={direita} style={{height:"30px", width:"30px"}} />
          </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <img style={{height:"30px", width:"30px"}} src={esquerda}/>
            </div>
        );
    };

    const settings = {
        className:"center",
        centerMode: true,
        centerPadding: 0,
        dots:true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    const [cardCarousel, setCardCarousel] = useState([]);

    const LoadCarousel = async () => {
        const res = await axios.get('http://localhost:3001/api/aboutus');
        const carousel={
            text:res.data[0].text,
            cards: []
        }
        res.data?.map((e)=>{carousel.cards.push(e.carrousel.card)})
        setCardCarousel(carousel)
    };

    useEffect(() => {
        LoadCarousel();
    }, []);
    return (  
        <div className="aboutUs" id="aboutUs" onLoad={loadButtonResponsive}>
            <div className="aboutUs-text">
                <h1 className="title">Conheça nossa História</h1>
                <p className="description">{cardCarousel.text}</p>
            </div>
            <div className="carousel">
                <div className="carousel-list">
                    <Slider {...settings}>
                        {cardCarousel.cards?.map(({texto,title,icon},index)=>(
                            <CardCarousel key={index} img={icon.url} title={title} text={texto} />
                        ))}
                    </Slider> 
                </div>
            </div>
        </div>         
    )
}


export default AboutUs;