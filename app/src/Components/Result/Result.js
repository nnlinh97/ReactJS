import React, { Component } from 'react';

class Result extends Component {
    setStyle = () => {
        return {
            color: this.props.color,
            fontSize: this.props.fontSize
        };
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Result</h3>
                    </div>
                    <div className="panel-body">
                        <p>Color: {this.props.color} - Fontsize: {this.props.setSize}px</p>
                        <div id="content" style={this.setStyle()}>
                            Content Result
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;