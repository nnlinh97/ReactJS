import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../ReduxWorkingManagement/actions/index'

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task);
    }
    render() {
        let task = this.props.task;
        let index = this.props.index;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status ? "label label-success" : "label label-danger"}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status ? "Active" : "Block"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"/>Edit
                     </button>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>
                        <span className="fa fa-trash mr-5" />Delete
                    </button>
                </td>
            </tr>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (taskId) => {
            dispatch(actions.updateStatusTask(taskId))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);