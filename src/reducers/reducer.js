import * as actions from '../actions/actions';
import superagent from 'superagent'
const initialState = {
    currentView: 'Home',
    spaces: [],
};


const reducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(action);
    switch (action.type) {
        case actions.CHANGE_VIEW:
            return { ...state, currentView: action.payload }
        case actions.CREATE_SPACE:
            newState.spaces.push(action.payload)
            return newState
        case actions.RETRIEVE_SPACES:
            console.log('in the reducer')
            newState.spaces = action.payload
            return newState
        default:
            return state;
    }
}

export default reducer;