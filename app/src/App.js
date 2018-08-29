import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Working Management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
                            `           <button type="submit" className="btn btn-danger">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="glyphicon glyphicon-plus mr-5" /> Add &nbsp;
                        </button>
                        <br/>
                        <div className="row mt-15">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <span className="glyphicon glyphicon-search mr-5" /> Search
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Sort Name - Status <span className="fa fa-caret-square-o-down ml-5" />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button">
                                                <span className="glyphicon glyphicon-alpha pr-5">
                                                    Name A-Z
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button">
                                                <span className="glyphicon glyphicon-alpha pr-5">
                                                    Name Z-A
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider" />
                                        <li><a role="button">Status - Active</a></li>
                                        <li><a role="button">Status - Block</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                                        <tr>
                                            <td>1</td>
                                            <td>Học lập trình</td>
                                            <td className="text-center">
                                                <span className="label label-success">
                                                    Kích Hoạt
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-warning">
                                                    <span className="fa fa-pencil mr-5" />Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger">
                                                    <span className="fa fa-trash mr-5" />Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default App;