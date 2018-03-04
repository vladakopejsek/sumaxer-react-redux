import React, { Component } from 'react';

const Card = ({ isTurned, onClick, number }) => {
    return (
        <div className="cardContainer" onClick={onClick}>
            <div className={isTurned ? "card turn":"card"}>
                <figure className="front">
                    <span>X</span>
                </figure>
                <figure className="back">
                    <span>{number}</span>
                </figure>
            </div>
        </div>
    );
};

export default Card;