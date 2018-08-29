import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import JSX from './Components/JSX/JSX';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Iphone X',
          price: '1000',
          image: 'https://tinyurl.com/ycamcv8c',
          status: true
        },
        {
          id: 2,
          name: 'Samsung Galaxy Note 9',
          price: '799',
          image: 'https://tinyurl.com/y9rjs5kv',
          status: true
        },
        {
          id: 3,
          name: 'Xiaomi Mi5',
          price: '599',
          image: 'https://tinyurl.com/y7hqyhgn',
          status: true
        }
      ],
      isActive: true
    }
    
  }

  onClick() {
    console.log('clicked');
  }

  onAddProduct = () => {
    console.log(this.refs.name.value);
  };
  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    let products = [
      {
        id: 1,
        name: 'Iphone X',
        price: '1000',
        image: 'https://tinyurl.com/ycamcv8c',
        status: true
      },
      {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        price: '799',
        image: 'https://tinyurl.com/y9rjs5kv',
        status: true
      },
      {
        id: 3,
        name: 'Xiaomi Mi5',
        price: '599',
        image: 'https://tinyurl.com/y7hqyhgn',
        status: true
      },
    ];
    let element = products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <Products
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      }
      return result;
    });

    let elementState = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <tr key={product.id}>
          <td>{index + 1}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      }
      return result;
    });
    return (
      <div className="App">
        <JSX />
        <Header />

        <button type="submit" class="btn btn-default" onClick={this.onSetState}>
          Click : {this.state.isActive ? 'true' : 'false'}
        </button>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {elementState}
          </tbody>
        </table>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="form-group">
                <label >Product Name</label>
                <input type="text" className="form-control" ref="name" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
                Save
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        {element}

        {/* <button type="button" className="btn btn-danger" onClick={this.onClick}>
          Click
        </button> */}

      </div>
    );
  }
}

export default App;
