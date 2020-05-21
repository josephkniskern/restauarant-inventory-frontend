import React from 'react'

const ListCard = (props) => {

  return(
    <div>
      <li>{props.item.name}</li>
    </div>
  )
}

export default ListCard