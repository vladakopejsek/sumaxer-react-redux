import ActiveCardsPresentational from '../components/ActiveCards'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        activeCards: state.activeCards
    }
};

const ActiveCards = connect(mapStateToProps)(ActiveCardsPresentational);

export default ActiveCards;