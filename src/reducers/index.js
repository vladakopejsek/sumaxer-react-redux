import exp from '../model/index'

let initialState = new exp.Model();

const processReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TURN_CARD':
        {
            if (state.turnsLeft > 0 && state.selectionLeft !== 0) {
                if (action.isTurned === false) {
                    return {
                        ...state,
                        turnsLeft: state.turnsLeft - 1,
                        selectionLeft: state.selectionLeft - 1,
                        score: state.score + action.number,
                        activeCards: [...state.activeCards, action.number],
                        cardsOnDeck: state.cardsOnDeck.map(card => {
                            if (card.number === action.number) {
                                return Object.assign({},
                                    card, {isTurned: !card.isTurned})
                            }
                            return card
                        })
                    }
                }
            }
            if (state.turnsLeft > 0 || state.selectionLeft < 1){
                if (action.isTurned === true) {
                    return {
                        ...state,
                        selectionLeft: state.selectionLeft + 1,
                        score: state.score - action.number,
                        activeCards: exp.remove(state.activeCards, action.number),
                        cardsOnDeck: state.cardsOnDeck.map(card => {
                            if (card.number === action.number) {
                                return Object.assign({},
                                    card, {isTurned: !card.isTurned})
                            }
                            return card
                        })
                    }
                }
            }
            if (state.turnsLeft < 1) {
                alert("Skončil jsi se " + state.score + " body");
                return state
            }
            if (state.turnsLeft > 0 && state.selectionLeft === 0) {
                return state
            }
        }

        case 'RESET':
            let stateNew = new exp.Model();
            return {
                ...state,
                turnsLeft: stateNew.turnsLeft,
                selectionLeft: stateNew.selectionLeft,
                score: stateNew.score,
                activeCards: stateNew.activeCards,
                cardsOnDeck: stateNew.cardsOnDeck
            };

        default:
            return state
        }
};

export default processReducer
