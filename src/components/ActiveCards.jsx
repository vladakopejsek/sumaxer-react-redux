import Card from './Card'
import React from 'react'

const ActiveCards = ({ activeCards }) => (
    <ul id="activeCards">
        {activeCards.map(number => (number !== null) ? <Card number={number} isTurned={true}/> : null)}
    </ul>
);

export default ActiveCards;