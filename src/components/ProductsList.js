import React from 'react';
import ProductsItem from './ProductsItem.js'

export default function ProductsList(props) {

  const productsList = props.products.map(product => {
    return (
      <ProductsItem product = {product} />
    )
  })
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsList}
      </tbody>
    </table>
  )
}

