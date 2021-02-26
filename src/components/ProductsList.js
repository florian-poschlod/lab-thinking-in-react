import React from 'react';
import ProductsItem from './ProductsItem.js'

export default function ProductsList(props) {

  console.log(props.stocked)

  let productsList = props.products.filter(product => {
    if (product.name.toLowerCase().includes(props.search.toLowerCase())) {
      return product
    }
  })

  if (props.stocked) {
    productsList = productsList.filter(product => {
      if (!product.stocked) {
        return product
      }
    })
  }

productsList = productsList.map(product => {
      return (
        <ProductsItem product={product} />
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

