import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../../../ReduxWorkingManagement/actions/index';

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
        // this.props.onFilter(
        //     name === "filterName" ? value : this.state.filterName,
        //     name === "filterStatus" ? value : this.state.filterStatus
        // );
        let filter = {
            name: name === "filterName" ? value : this.state.filterName,
            status: name === "filterStatus" ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        });

    }

    render() {

        let { filterName, filterStatus } = this.state;

        // let tasks = this.props.tasks; //ES6 let {tasks} = this.props;
        let { tasks, filterTable, keyword, sort } = this.props;
        // console.log(filterTable);

        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if(filterTable.status === -1){
                    return task;
                }
                return task.status === (filterTable.status === 1 ? true : false);
            });
        }

        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

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

        let elementTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                // onUpdateStatus={this.props.onUpdateStatus}
                // onDeleteTask={this.props.onDeleteTask}
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
        tasks: state.tasks, //state.tasks là thèn trong reducer index.js
        filterTable: state.filterTable,
        keyword: state.search.keyword,
        sort: state.sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);