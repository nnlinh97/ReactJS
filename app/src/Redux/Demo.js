import {createStore} from 'redux';

var initialState = {
    status: false,
    sort: {
        by: "name",
        value: 1
    }
}

var myReducer = (state = initialState, action) => {
    return state;
}
const store = createStore(myReducer);

console.log(store.getState());