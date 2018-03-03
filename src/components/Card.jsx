import React, { Component } from 'react';

const Card = ({ isTurned, onClick, number }) => {
    return (
        <div className="cardContainer" onClick={onClick}>
            <div className={isTurned ? "card turn":"card"}>
                <div className="front">front</div>
                <div className="back">{number}</div>
            </div>
        </div>
    );
};

export default Card;