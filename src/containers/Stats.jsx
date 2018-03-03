import StatsPresentational from '../components/Stats'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        turnsLeft: state.turnsLeft,
        selectionLeft: state.selectionLeft,
        score: state.score
    }
};

const Stats = connect(mapStateToProps)(StatsPresentational);

export default Stats;