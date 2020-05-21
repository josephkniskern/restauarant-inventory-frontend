import React from 'react'

const ProductCard = (props) => {
  // console.log(props.product)
  return(
  <div onClick={() => props.handleClick(props.product)}>{props.product.name}</div>
  )
}

export default ProductCard