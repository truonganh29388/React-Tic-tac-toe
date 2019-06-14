import { connect } from 'react-redux'
import { newStep } from '../actions/play';
import Board from '../components/Board';

const mapDispatchToProps = dispatch => {
    return {
        onClick: i => {
            dispatch(newStep(i))
        }
    }
}

const BoardContainer = connect(null, mapDispatchToProps)(Board)

export default BoardContainer