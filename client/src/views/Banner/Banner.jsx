import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { Button } from "../../components";

const Banner = () => {
  const [banners, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get("https://ijuniorloop.herokuapp.com/api/banner");
    const Objeto = {
      text: res.data[0].text,
      title: res.data[0].title.url,
      image: res.data[0].imageBanner.url,
    };
    setBanner(Objeto);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <div id="ijuniorloop">
      <div className="banner-text">
        <img src={banners.title} alt="iJunior Loop" />
        <p>{banners.text}</p>
        <div className="button">
          <a href="#Contato">
            <Button text="Entre em Contato" Width={158} Height={44} />
          </a>
        </div>
      </div>
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${banners.image})` }}
      ></div>
    </div>
  );
};

export default Banner;
