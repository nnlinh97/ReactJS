import * as types from '../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
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

export const filterTask = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter: filter //filerName, filterStatus
    }
}

export const search = (keyword) => {
    return {
        type: types.SEARCH,
        keyword: keyword //filerName, filterStatus
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort: sort //filerName, filterStatus
    }
}