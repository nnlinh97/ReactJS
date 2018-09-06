import * as types from '../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatusTask = (taskId) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        taskId: taskId
    }
}

export const deleteTask = (taskId) => {
    return {
        type: types.DELETE_TASK,
        taskId: taskId
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task: task
    }
}