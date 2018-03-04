import StatsPresentational from '../components/Stats'

import { connect } from 'react-redux'
import { reset } from "../actions";

const mapStateToProps = (state) => {
    return {
        turnsLeft: state.turnsLeft,
        selectionLeft: state.selectionLeft,
        score: state.score
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onResetClick: () => {
            dispatch(reset())
        }
    }
};

const Stats = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatsPresentational);

export default Stats;