import React, { Component } from 'react';

class Products extends Component {
    detail(text){
        console.log(text);
    }
    addToCart = () => {
        console.log(this.props.name);
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img src={this.props.image}  />
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p> ${this.props.price}</p>
                            <p>
                                <a href="#" className="btn btn-primary" onClick={() => this.detail(this.props.name)}>Detail</a>
                                <a href="#" className="btn btn-default" onClick={this.addToCart}>Add To Cart</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;