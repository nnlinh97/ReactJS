import React, { Component } from 'react';
import TaskForm from './Components/WorkingManagement/TaskForm/TaskForm';
import Control from './Components/WorkingManagement/Control/Control';
import TaskList from './Components/WorkingManagement/TaskList/TaskList';

const randomstring = require("randomstring");
const _ = require("lodash");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: "",
                status: -1
            },
            keyword: "",
            sort: {
                by: "name",
                value: 1
            }
        }
    }


    componentWillMount() { //khi load lại trang thì hàm này được gọi 1 lần duy nhất
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onGenerateData = () => {
        let tasks = [
            {
                id: randomstring.generate(),
                name: "Thiet Ke Giao Dien",
                status: true
            },
            {
                id: randomstring.generate(),
                name: "Kien Truc Phan Mem",
                status: false
            },
            {
                id: randomstring.generate(),
                name: "Kiem Chung Phan Mem",
                status: true
            },
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            });
        }
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    onSubmitForm = (data) => {
        let tasks = this.state.tasks;
        if (data.id === "") {
            data.id = randomstring.generate();
            tasks.push(data);
        } else {
            let index = this.findindex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (taskId) => {
        let tasks = this.state.tasks;
        // let index = this.findindex(taskId);
        let index = _.findIndex(tasks, (task) => {
            return task.id === taskId;
        });
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onDeleteTask = (taskId) => {
        let tasks = this.state.tasks;
        let index = this.findindex(taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onUpdate = (task) => {
        this.onShowForm();
        this.setState({
            taskEditing: task
        });
    }

    findindex = (taskId) => {
        let tasks = this.state.tasks;
        let result = -1;
        tasks.forEach((task, index) => {
            if (task.id === taskId) {
                result = index;
            }
        });
        return result;
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        });
    }

    onSort = (sortBy, value) => {
        this.setState({
            sort: {
                by: sortBy,
                value:value
            }
        });
    }
    render() {

        // let tasks = this.state.tasks; //ES6 let {tasks} = this.state
        // let isDisplayForm = this.state.isDisplayForm;
        // let taskEditing = this.state.taskEditing;
        // let filter = this.state.filter;

        let { tasks, isDisplayForm, taskEditing, filter, keyword, sort } = this.state;

        console.log(sort);

        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if(filter.status === -1){
                    return task;
                }
                return task.status === (filter.status === 1 ? true : false);
            });
        }

        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }
        let elmTaskForm = isDisplayForm
            ? <TaskForm
                onCloseForm={this.onCloseForm}
                onSubmitForm={this.onSubmitForm}
                task={taskEditing}
            />
            : "";

        if(sort.by === "name"){
            tasks.sort((a, b) => {
                if(a.name > b.name) {
                    return sort.value;
                }else if(a.name < b.name){
                    return -sort.value;
                } else {
                    return 0;
                }
            });
        }
        if(sort.by === "status"){
            tasks.sort((a, b) => {
                if(a.status > b.status) {
                    return -sort.value;
                }else if(a.status < b.status){
                    return sort.value;
                } else {
                    return 0;
                }
            });
        }

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Working Management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {elmTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="glyphicon glyphicon-plus mr-5" /> Add &nbsp;
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
                            <span className="glyphicon glyphicon-plus mr-5" /> Data &nbsp;
                        </button>
                        <br />
                        <Control 
                            onSearch={this.onSearch} 
                            onSort={this.onSort}
                            sort={sort}
                        />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDeleteTask={this.onDeleteTask}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default App;