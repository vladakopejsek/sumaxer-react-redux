export const turnCard = (card) => ({
    type: 'TURN_CARD',
    isTurned: card.isTurned,
    number: card.number,
    card
});

export const reset = () => ({
    type: 'RESET'
});