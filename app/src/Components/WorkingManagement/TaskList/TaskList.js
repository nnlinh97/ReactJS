import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
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
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value={-1}>All</option>
                                <option value={0}>Block</option>
                                <option value={1}>Active</option>
                            </select>
                        </td>
                        <td />
                        <td />
                    </tr>
                    <TaskItem/>
                </tbody>
            </table>
        );
    }
}

export default TaskList;