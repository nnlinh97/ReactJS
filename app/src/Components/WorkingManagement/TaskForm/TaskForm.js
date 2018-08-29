import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Add</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <label>Status</label>
                        <select className="form-control" required="required">
                            <option value={1}>Active</option>
                            <option value={0}>Block</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;