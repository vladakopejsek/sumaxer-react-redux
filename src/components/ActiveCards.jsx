import Card from './Card'
import React from 'react'

const ActiveCards = ({ activeCards }) => (
    <ul id="activeCards">
        {activeCards.map(number => <Card number={number} isTurned={true}/>)}
    </ul>
);

export default ActiveCards;