import DeckPresentational from '../components/Deck'

import { connect } from 'react-redux'
import { turnCard } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onCardClick: (card) => {
            dispatch(turnCard(card))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        cardsOnDeck: state.cardsOnDeck
    }
};

const Deck = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckPresentational);

export default Deck