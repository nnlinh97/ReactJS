import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../ReduxWorkingManagement/actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: false
        }
    }


    componentWillMount() { //khi component được gắn vào thì hàm này được gọi duy nhất 1 lần
        if (this.props.task) {
            let task = this.props.task;
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            let task = nextProps.task;
            this.setState({
                id: task.id,
                name: task.name,
                status: task.status
            });
        } else if (!nextProps.task) {
            this.setState({
                id: "",
                name: "",
                status: false
            });
        }
    }


    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        // this.props.onSubmitForm(this.state);
        this.props.onAddTask(this.state);


        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: "",
            status: false
        });
    }
    render() {
        let taskId = this.state.id;
        if (!this.props.isDisplayForm) return "";
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title ">
                        {(taskId !== "" ? "Edit Form" : "Add Form")}
                        <span
                            className="glyphicon glyphicon-remove-circle pull-right"
                            onClick={this.onCloseForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Status</label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Block</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>Refresh</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        task: state.taskEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);