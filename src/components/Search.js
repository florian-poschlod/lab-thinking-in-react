import React from 'react'

export default class Search extends React.Component {

  

  handleChange = event => {
    this.props.setSearchProp(event.target.value)
  }

  handleStockedChange = event => {
    this.props.setIsStockedProp(event.target.checked)
  }

  render() {
    return (
      <div id='search-container'>
        <h4>Search</h4>

        <input
          id="search-field"
          type="text"
          name="search"
          value={this.props.search}
          onChange={this.handleChange}
        />

        <div className="flex row checkbox-container">
          <input
            type="checkbox"
            name="isStocked"
            id="isStocked"
            checked={this.props.isStocked}
            onChange={this.handleStockedChange}
          />
          <label for="isStocked">Only show products in stock</label>
        </div>
        

      </div>
    )
  }
}
