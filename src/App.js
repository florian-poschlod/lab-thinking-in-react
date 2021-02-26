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
    search: '',
    isStocked: false
  }

  setSearch = searchParam => {
    this.setState({
      search: searchParam
    })
  }

  setIsStocked = isStockedParam => {
    this.setState({
    isStocked: isStockedParam
    })
  }

  render() {

    // console.log(this.state.isStocked)

    return (
      <div className="App">
        <h1>Iron Store</h1>
        <Search
          search={this.state.search}
          setSearchProp={this.setSearch}
          setIsStockedProp={this.setIsStocked}
        />
        <ProductsList
          products={this.state.products}
          search={this.state.search}
          stocked={this.state.isStocked}
        />
      </div>
    );
  }
}

export default App;
