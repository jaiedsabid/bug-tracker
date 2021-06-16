import * as ActionTypes from './ActionTypes';
import BUGS from '../shared/BUGS';

export const addBugs = (bugs) => {
    return {
        type: ActionTypes.ADD_BUGS,
        payload: bugs
    };
}

export const fetchBugs = () => dispatch => {
    dispatch(addBugs(BUGS));
};

export const postBug = (bug) => dispatch => {
    let newBug = {
        bugInfo: bug,
        isResolved: false,
        bugSolution: ""
    };
    dispatch(addBug(newBug));
}

export const addBug = (bug) => {
    return {
        type: ActionTypes.ADD_BUG,
        payload: bug
    };
}

export const removeBug = (id) => {
    return {
        type: ActionTypes.REMOVE_BUG,
        payload: id
    };
}

export const resolveBug = (id, solution) => {
    return {
        type: ActionTypes.RESOLVE_BUG,
        payload: {
            id: id,
            solution: solution
        }
    };
}