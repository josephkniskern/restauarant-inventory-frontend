import React from 'react'

const ListCard = (props) => {

  return(
    <tr>
      <td>{props.item.name}</td>
      <td>${props.item.price}</td>
    </tr>
  )
}

export default ListCard