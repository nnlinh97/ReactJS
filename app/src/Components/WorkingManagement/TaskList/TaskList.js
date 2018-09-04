import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1 //all: -1, active: 1, block: 0
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        });
        
    }

    render() {

        let { filterName, filterStatus } = this.state;

        let tasks = this.props.tasks; //ES6 let {tasks} = this.props;

        let elementTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                // onUpdateStatus={this.props.onUpdateStatus}
                onDeleteTask={this.props.onDeleteTask}
                onUpdate={this.props.onUpdate}
            />
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">
                            <span className="glyphicon glyphicon-pencil"></span>
                        </th>
                        <th className="text-center">
                            <span className="glyphicon glyphicon-trash"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={0}>Block</option>
                                <option value={1}>Active</option>
                            </select>
                        </td>
                        <td />
                        <td />
                    </tr>
                    {elementTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => { //state là của thèn store
    return {
        tasks: state.tasks //state.tasks là thèn trong reducer index.js
    }
}
export default connect(mapStateToProps, null)(TaskList);