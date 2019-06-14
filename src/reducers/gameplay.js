import { PlayTypes } from "../actions/play";


const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const initialState = {
    history: [{
        squares: Array(9).fill(null),
        currentPlayer: 'X',
        nextPlayer: null,
        winner: null
    }]
}

const squares = (state = initialState, action) => {
    switch (action.type) {
        case PlayTypes.NEW_STEP:
            //get last history
            const lastHistory = state.history[state.history.length - 1]

            //return if has winner or the square has value
            if (lastHistory.winner || lastHistory.squares[action.index])
                return state
            
             //init new square   
            const newSquares = lastHistory.squares.map((x, i) => i === action.index ? lastHistory.currentPlayer : x)

            //update state with new history
            state = {
                history: [...state.history,
                {
                    squares: newSquares,
                    currentPlayer: lastHistory.currentPlayer === 'X' ? 'O' : 'X',
                    nextPlayer: lastHistory.nextPlayer === 'X' ? 'O' : 'X',
                    winner: calculateWinner(newSquares)
                }]
            }
            return state


        case PlayTypes.GO_TO_STEP:
            state = {
                history: [...state.history.slice(0, action.index+1)]
            }
            return state
        default:
            return state
    }
}
export default squares