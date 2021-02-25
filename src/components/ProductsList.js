import React from 'react';
import ProductsItem from './ProductsItem.js'

export default function ProductsList(props) {


  console.log(props.stocked)

  // filtered prods. map
  // filter if props.stocked filter for stocked prods

  const filteredProducts = props.products.filter(product => {
    if (product.name.includes(props.search)) {
      return product
    }
  })
  .map(product => {
    // if(props.stocked) {
    //   return (
    //     {product.stocked ? && <ProductsItem product={product} />}
    //   )
    // }
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
        {/* {productsList} */}
        {filteredProducts}
      </tbody>
    </table>
  )
}

