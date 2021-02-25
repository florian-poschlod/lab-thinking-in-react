import React from 'react'

export default function ProductsItem(props) {

  return (
    <tr key={props.product.id}>
      <td style={props.product.stocked ? { color: 'red' } : { color: 'black' }}>
        {props.product.name}
      </td>
      <td>{props.product.price}</td>
    </tr>
  )
}
