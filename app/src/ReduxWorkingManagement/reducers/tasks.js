import * as types from '../constants/ActionTypes';
const randomstring = require("randomstring");


let data = JSON.parse(localStorage.getItem('task'));
console.log(data);
let initialState = data ? data : []; //state này truyền qua props cho TaskList Component
console.log(initialState);
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            let newTask = {
                id: randomstring.generate(),
                name: action.task.name,
                status:  action.task.status
            }
            state.push(newTask);
            localStorage.setItem('task', JSON.stringify(state));
            return [...state]; //copy ra 1 array moi roi return ve
        default: return state;
    }
    return state;
}
export default myReducer;