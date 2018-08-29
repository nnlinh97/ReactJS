import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Size from './Components/Size/Size';
import Reset from './Components/Reset/Reset';
import Result from './Components/Result/Result';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15,
            username: "",
            password: "",
            description: "",
            gender: 0,
            language: "vi",
            status: true
        }
    }

    onSetColor = (params) => {
        this.setState({
            color: params
        });
    }
    onsetSize = (params) => {
        this.setState({
            fontSize: params
        })
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type ==="checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <ColorPicker
                        color={this.state.color}
                        onReceiveColor={this.onSetColor}
                    />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <Size
                            fontSize={this.state.fontSize}
                            setSize={this.onsetSize}
                        />

                        <Reset
                            onReceiveColor={this.onSetColor}
                            setSize={this.onsetSize}
                        />

                    </div>

                    <Result
                        color={this.state.color}
                        fontSize={this.state.fontSize}
                        setSize={this.state.fontSize}
                    />

                </div>

                {/* Form */}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.onHandleSubmit}>
                                        <div className="form-group">
                                            <label >UserName</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                onChange={this.onHandleChange}
                                                value={this.state.username}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label >Password</label>
                                            <input
                                                type="text"
                                                name="password"
                                                className="form-control"
                                                onChange={this.onHandleChange}
                                                value={this.state.password}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label >Description</label>

                                            <textarea
                                                name="description"
                                                className="form-control"
                                                rows="3"
                                                onChange={this.onHandleChange}
                                                value={this.state.description}
                                            ></textarea>

                                        </div>

                                        <div className="form-group">
                                            <label >Gender</label>

                                            <select 
                                                name="gender" 
                                                className="form-control"
                                                onChange={this.onHandleChange}
                                                value={this.state.gender}
                                            >
                                                <option value={0}>Female</option>
                                                <option value={1}>Male</option>
                                            </select>
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <label >Language</label>
                                            <div className="radio">
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="language" 
                                                        value="vi"
                                                        onChange={this.onHandleChange}
                                                        checked={this.state.language === "vi"}
                                                    />
                                                    Vietnamese
                                                </label><br/>
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="language" 
                                                        value="en"
                                                        onChange={this.onHandleChange}
                                                        checked={this.state.language === "en"}
                                                    />
                                                    English
                                                </label>
                                            </div>
                                            
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label>
                                                    <input 
                                                        type="checkbox"
                                                        name="status"
                                                        onChange={this.onHandleChange}
                                                        value={true}
                                                        checked={this.state.status === true}
                                                    />
                                                    Is Active
                                                </label>
                                            </div>
                                        </div>
                                        <br />

                                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                        <button type="reset" className="btn btn-danger">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
