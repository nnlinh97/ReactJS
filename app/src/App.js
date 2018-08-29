import React, { Component } from 'react';
import TaskForm from './Components/WorkingManagement/TaskForm/TaskForm';
import Control from './Components/WorkingManagement/Control/Control';
import TaskList from './Components/WorkingManagement/TaskList/TaskList';

const randomstring = require("randomstring");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }


    componentWillMount() { //khi load lại trang thì hàm này được gọi 1 lần duy nhất
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
            console.log(this.state);
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
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Working Management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <TaskForm />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="glyphicon glyphicon-plus mr-5" /> Add &nbsp;
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
                            <span className="glyphicon glyphicon-plus mr-5" /> Data &nbsp;
                        </button>
                        <br />
                        <Control />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default App;