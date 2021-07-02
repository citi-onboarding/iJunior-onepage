import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Development.css';
import './DevelopmentResponsive.css';
import { CardDevelopment } from '../../components';
import list from "../../images/list.png"
import aeroplane from "../../images/aeroplane.png"


const Development = () => {
  const [development, setDevelopment] = useState([])
  const loadDevelopment = async () => {
    const res = await axios.get('https://ijuniorloop.herokuapp.com/api/development');
    const Object = {
      quote: res.data[0].quote,
      comment: res.data[0].comment,
      Mvp: res.data[0].cards.cardMvp.textCardMvp,
      Modules: res.data[0].cards.cardModules.textCardModules
    }
    setDevelopment(Object)
  };

  useEffect(() => {
    loadDevelopment();
  }, []);

  return (
    <div id="desenvolvimento" >
      <div className="Development">
        {development && (
          <div className="development-center">
            <div className="development-text">
              <h1>Desenvolvimento</h1>
              <h5>{development.quote}</h5>
              <p>{development.comment}</p>
            </div>
            <div className="cards-development">
              <CardDevelopment title="MVP" text={development.Mvp} img={aeroplane} />
              <CardDevelopment title="Modules" text={development.Modules} img={list} />
            </div>
            <div className="cards-development-mobile">
              <CardDevelopment title="MVP" text={development.Mvp} img={aeroplane} />
              <CardDevelopment title="Modules" text={development.Modules} img={list} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Development;