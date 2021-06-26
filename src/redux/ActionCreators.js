import * as ActionTypes from './ActionTypes';
import baseURL from "../shared/baseURL";

export const addBugs = (bugs) => {
    return {
        type: ActionTypes.ADD_BUGS,
        payload: bugs
    };
}

export const fetchBugs = () => async dispatch => {
    try {
        const jsonData = await fetch(baseURL, {method: "GET"});
        const data = await jsonData.json();
        dispatch(addBugs(data));
    } catch (err) {
        console.log("Error:", err);
    }
};

export const postBug = (bug) => async (dispatch) => {
    try {
        let newBug = {bugInfo: bug};
        const postData = await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(newBug),
            headers: {"Content-Type": "application/json"}
        });
        const data = await postData.json();
        dispatch(addBug(data));
        return;
    } catch (e) {
        console.log("Error:", e);
    }
}

export const addBug = (bug) => {
    return {
        type: ActionTypes.ADD_BUG,
        payload: bug
    };
}

export const removeBugReq = (id) => async (dispatch) => {
    try{
        await fetch(baseURL + id, {method: "DELETE"});
        dispatch(removeBug(id));
    } catch (e) {
        console.log("Error:", e);
    }
};

export const removeBug = (id) => {
    return {
        type: ActionTypes.REMOVE_BUG,
        payload: id
    };
}

export const resolveBugReq = (id, solution) => async (dispatch) => {
    try{
        await fetch(baseURL + id, {
            method: "PUT",
            body: JSON.stringify({bugSolution: solution}),
            headers: {"Content-Type": "application/json"}
        });
        dispatch(resolveBug(id, solution));
    } catch (e) {
        console.log("Error:", e);
    }
};

export const resolveBug = (id, solution) => {
    return {
        type: ActionTypes.RESOLVE_BUG,
        payload: {
            id: id,
            solution: solution
        }
    };
}