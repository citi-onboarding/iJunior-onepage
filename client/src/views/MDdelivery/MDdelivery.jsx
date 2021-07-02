import React, { useEffect, useState } from 'react';
import { CardMDdelivery } from '../../components';
import axios from 'axios';
import './MDdelivery.css';
import './MDdeliveryResponsive.css';
import waveDots from '../../images/wave-dots.png'
import firstImg from '../../images/lupa.png';
import secondImg from '../../images/lapada.png'
import thirdImg from '../../images/lapis.png';
import fourthImg from '../../images/conexao.png'
import fifthImg from '../../images/estrela.png'

const MDdelivery = () => {
    const [MDdeliveryData, setMDdeliveryData] = useState(null);

    const loadData = async () => {
        const response = await axios.get('https://ijuniorloop.herokuapp.com/api/mdelivery');

        const data = {
            textFirstElement: {
                firstCard: response.data[0].textFirstElement
            },
            textSecondElement: {
                secondCard: response.data[0].textSecondElement
            },
            textThirdElement: {
                thirdCard: response.data[0].textThirdElement
            },
            textFourthElement: {
                fourthCard: response.data[0].textFourthElement
            },
            textFifthElement: {
                fifthCard: response.data[0].textFifthElement
            }
        }

        setMDdeliveryData(data);
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div className="MDcontainer" id="entregamodular">
            <div className="callToAction">
                <img className="waveDotsImg" src={waveDots} />
                <h1 className="title">Entrega Modular</h1>
            </div>
            <div className="cards-container">
                {MDdeliveryData && (
                    <>
                        <CardMDdelivery backgroundColor="dark" ImgIcon={firstImg} title="1.Estudo de demanda" text={MDdeliveryData.textFirstElement.firstCard} />
                        <CardMDdelivery backgroundColor="clear" ImgIcon={secondImg} title="2.Análise de Requisitos" text={MDdeliveryData.textSecondElement.secondCard} />
                        <CardMDdelivery backgroundColor="clear" ImgIcon={thirdImg} title="3.Criação de um Protótipo" text={MDdeliveryData.textThirdElement.thirdCard} />
                        <CardMDdelivery backgroundColor="soso" ImgIcon={fourthImg} title="4.Desenvolvimento" text={MDdeliveryData.textFourthElement.fourthCard} />
                        <CardMDdelivery backgroundColor="dark" bar={true} ImgIcon={fifthImg} title="5.Validação e Teste" text={MDdeliveryData.textFifthElement.fifthCard} />
                    </>
                )}
            </div>
        </div>
    )
}

export default MDdelivery;