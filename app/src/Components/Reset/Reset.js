import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
    }
    
    resetColor = () => {
        this.props.onReceiveColor('red');
        this.props.setSize(15);
    }
    render() {
        return (
            <button type="button" className="btn btn-danger" onClick={() => this.resetColor()}>
                Reset
            </button>
        );
    }
}

export default Reset;