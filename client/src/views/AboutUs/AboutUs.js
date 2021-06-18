import React from 'react';
import './AboutUs.css';
import Slider from "react-slick";
const AboutUs = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <>
            <div className="aboutUs">
                <h1 className="title">Conheça nossa história</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur elit. </p>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>

                    <div>
                        <h3>2</h3>
                    </div>

                    <div>
                        <h3>3</h3>
                    </div>

                    <div>
                        <h3>4</h3>
                    </div>

                    <div>
                        <h3>5</h3>
                    </div>

                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    )

}

export default AboutUs;