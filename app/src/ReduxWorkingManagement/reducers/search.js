import * as types from '../constants/ActionTypes';

let initialState = ""; 
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            // console.log(action);
            return action;
        default: return state;
    }
    return state;
}
export default myReducer;