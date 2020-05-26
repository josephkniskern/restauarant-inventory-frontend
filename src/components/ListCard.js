import React from 'react'

const ListCard = (props) => {

  return(
    <div>
      <li>{props.item.name} ${props.item.price}</li>
    </div>
  )
}

export default ListCard