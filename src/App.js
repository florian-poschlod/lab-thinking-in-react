import React from 'react';
// import logo from './logo.svg';
import './App.css';
import jsondata from './data.json'
import Search from './components/Search.js';
import ProductsList from './components/ProductsList.js';
// import ProductsItem from './components/ProductsItem.js';

class App extends React.Component {

  state = {
    products: jsondata.data,
    search: ''
  }
  
  render() {

    return (
      <div className="App">
        <h1>Iron Store</h1>
        <Search search = {this.state.search}/>
        <ProductsList products = {this.state.products}/>
      </div>
    );
  }
}

export default App;
