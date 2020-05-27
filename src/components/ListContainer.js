import React from 'react'
import ListCard from './ListCard'
import { SaveButton } from './styled'

const ListContainer = (props) => {
  // console.log(props.items)
  return(
    
    <div className="table-borderless">
      <table>
        <thead className="thead-light">
          <tr>
            <th id="product">Product</th>
            <th id="price">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map( item => <ListCard key={Math.random()} item={item}/>)} 
        </tbody>
      </table>
      <SaveButton onClick={() => props.handleSubmitClick()}>Save List</SaveButton>
      <SaveButton onClick={() => props.handleDelete()}>Clear List</SaveButton>
    </div>

  )
}

export default ListContainer