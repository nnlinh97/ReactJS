import { combineReducers } from "redux";
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';

const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    taskEditing: taskEditing
});

export default myReducer;
