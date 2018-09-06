import * as types from '../constants/ActionTypes';
const randomstring = require("randomstring");
const _ = require('lodash');


let data = JSON.parse(localStorage.getItem('tasks'));
// console.log(data);
let initialState = data ? data : []; //state này truyền qua props cho TaskList Component
// console.log(initialState);
var myReducer = (state = initialState, action) => {

    let index = -1;
    switch (action.type) {

        case types.LIST_ALL:
            return state;

        case types.SAVE_TASK:

            let task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            };

            if (!task.id) {
                task.id = randomstring.generate();
                state.push(task);
            }else {
                index = _.findIndex(state, (task) => {
                    return task.id === action.task.id;
                });
                state[index] = task;
            }

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; //copy ra 1 array moi roi return ve

        case types.UPDATE_STATUS_TASK:
            index = _.findIndex(state, (task) => {
                return task.id === action.taskId;
            });
            // console.log(index);
            if (index !== -1) {
                // state[index].status = !state[index].status;
                let cloneTask = { ...state[index] };
                cloneTask.status = !cloneTask.status;
                state[index] = cloneTask;
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];

        case types.DELETE_TASK:
            index = _.findIndex(state, (task) => {
                return task.id === action.taskId;
            });
            // console.log(action);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];

        default: return state;
    }
    return state;
}
export default myReducer;
