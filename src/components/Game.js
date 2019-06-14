import React from 'react';
import PropTypes from 'prop-types'
import BoardContainer from '../containers/BoardContainer';
import './style/Game.css';
import StepListContainer from '../containers/StepListContainer';

const Game = ({ squares, winner }) => (
    <div>
    <BoardContainer squares={squares} />
        <h2>Winner: {winner}</h2>
    <StepListContainer/>
    </div>
)

Game.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    winner: PropTypes.string
}

export default Game