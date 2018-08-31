import React, { Component } from 'react';

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: "name",
                value: 1
            }
        }
    }
    
    onClick = (sortBy, value) => {
        this.setState({
            sort: {
                by: sortBy,
                value: value
            }
        });
        this.props.onSort(sortBy, value);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }
    

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort Name - Status <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onClick("name", 1)}>
                            <a role="button">
                                <span className="glyphicon glyphicon-alpha pr-5">
                                    Name A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={ () => this.onClick("name", -1)}>
                            <a role="button">
                                <span className="glyphicon glyphicon-alpha pr-5">
                                    Name Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={ () => this.onClick("status", 1)}>
                            <a role="button">Status - Active</a>
                        </li>
                        <li  onClick={ () => this.onClick("status", -1)}>
                            <a role="button">Status - Block</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;