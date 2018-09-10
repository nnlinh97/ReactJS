import * as types from '../constants/ActionTypes';

let initialState = {
    by: "name",
    value: 1
}; 
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            // console.log(action);
            return action.sort;
        default: return state;
    }
    return state;
}
export default myReducer;