import Card from './Card'
import React from 'react'

const Deck = ({ cardsOnDeck, onCardClick }) => (
    <ul id="deck">
        {cardsOnDeck.map(card =>
            <Card number={card.number} isTurned={card.isTurned} onClick={() => onCardClick(card)}/>
        )}
    </ul>
);

export default Deck;