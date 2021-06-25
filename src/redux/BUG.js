import * as ActionTypes from "./ActionTypes";

export default function Bugs(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_BUGS:
            return action.payload;
        case ActionTypes.ADD_BUG:
            let bugItem = action.payload;
            return state.concat(bugItem);
        case ActionTypes.REMOVE_BUG:
            let newState = state.filter(item => {
                return item.id !== action.payload;
            });
            return newState;
        case ActionTypes.RESOLVE_BUG:
            let newStateAfter = state.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, isResolved: true, bugSolution: action.payload.solution}
                } else {
                    return item;
                }
            });
            return newStateAfter;
        default:
            return state;
    }
};