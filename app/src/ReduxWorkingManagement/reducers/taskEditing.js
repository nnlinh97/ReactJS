import * as types from '../constants/ActionTypes';


let initialState = {}; 
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            // console.log(action);
            state = action.task;
            return {...state};
        default: return state;
    }
    return state;
}
export default myReducer;