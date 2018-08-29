import React, { Component } from 'react';

class Size extends Component {
    desc = () => {
        this.props.setSize(this.props.fontSize - 2);
    }
    ins = () =>{
        this.props.setSize(this.props.fontSize + 2);
    }
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Size {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.desc()}>
                        Giam
                    </button>
                    <button type="button" className="btn btn-info" onClick={() => this.ins()}>
                        Tang
                    </button>
                </div>
            </div>
        );
    }
}

export default Size;