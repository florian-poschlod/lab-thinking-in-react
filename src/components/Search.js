import React from 'react'

export default function Search(props) {
  return (
    <div id='search'>
      <h3>Search</h3>
      <input type="text" name="search" value={props.search} />
    </div>
  )
}
