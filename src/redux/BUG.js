import * as ActionTypes from "./ActionTypes";

export default function Bugs(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_BUGS:
            return action.payload;
        case ActionTypes.ADD_BUG:
            let bugItem = action.payload;
            bugItem.id = state.length+1;
            return state.concat(bugItem);
        default:
            return state;
    }
};