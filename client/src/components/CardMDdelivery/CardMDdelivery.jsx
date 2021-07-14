import React from 'react';
import './CardMDdelivery.css';

const CardMDdelivery = ({ title, text, backgroundColor, ImgIcon, bar }) => {
    return (
        <div className='container-card'>
            <div className="card-container">
                <div className={`card ${backgroundColor}`}>
                    <img className="icon" src={ImgIcon} />
                </div>
                {!bar && (
                    <div className={`bar ${backgroundColor}`}></div>
                )
                }
            </div>
            <div className="text-container">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default CardMDdelivery;