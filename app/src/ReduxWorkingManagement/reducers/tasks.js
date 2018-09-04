import * as types from '../constants/ActionTypes';
const randomstring = require("randomstring");
const _ = require('lodash');


let data = JSON.parse(localStorage.getItem('tasks'));
// console.log(data);
let initialState = data ? data : []; //state này truyền qua props cho TaskList Component
// console.log(initialState);
var myReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.LIST_ALL:
            return state;

        case types.ADD_TASK:
            let newTask = {
                id: randomstring.generate(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; //copy ra 1 array moi roi return ve

        case types.UPDATE_STATUS_TASK:
                let index = _.findIndex(state, (task) => {
                    return task.id === action.taskId;
                });
                console.log(index);
                if (index !== -1) {
                    state[index].status = !state[index].status;
                    localStorage.setItem('tasks', JSON.stringify(state));
                }
            return [...state];

        default: return state;
    }
    return state;
}
export default myReducer;