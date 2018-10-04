import superagent from 'superagent'
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CREATE_SPACE = 'CREATE_SPACE';
export const RETRIEVE_SPACES = 'RETRIEVE_SPACES';
export const changeViewCreator = (newView) => {
    return {
        type: CHANGE_VIEW,
        payload: newView,
    }
}
export const createSpace = (space) => {
    return {
        type: CREATE_SPACE,
        payload: space,
    }
}
export const updateStoredSpaces = (spaces) => {
    return {
        type: RETRIEVE_SPACES,
        payload: spaces,
    }
}

export function getSpaces() {
    return function (dispatch, getState) {
        return superagent.get('/spaces/').then(function (res) {
            // console.log(res.body)
            dispatch(updateStoredSpaces(res.body));
        });
    };
}



