import {createStore} from 'redux';
import {status, sort} from './Actions/index';
import myReducer from './reducers/index'


const store = createStore(myReducer);
//Thuc hien cong viec thay doi status

// console.log("DEFAULT: ",store.getState());

store.dispatch(status());

// console.log("TOGGLE_STATUS: ",store.getState());

//Thuc hien cong viec sort name Z-A


store.dispatch(sort({
    by: "name",
    value: -1
}));
// console.log("SORT: ", store.getState());