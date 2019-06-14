import { connect } from 'react-redux'
import Game from '../components/Game';

const mapStateToProps = state => {
    return {
        squares: state.history[state.history.length - 1].squares,
        winner: state.history[state.history.length - 1].winner
    }    
}

const GameContainer = connect(mapStateToProps,null)(Game)

export default GameContainer