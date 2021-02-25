import React from 'react'

export default class Search extends React.Component {

  handleChange = event => {
    this.props.setSearchProp(event.target.value)
  }
  
  render() {
    return (
      <div id='search'>
        <h3>Search</h3>
        <input type="text" name="search" value={this.props.search} onChange={this.handleChange}/>
      </div>
    )
  }
}
