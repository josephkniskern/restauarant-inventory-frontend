import React from 'react'
import ListCard from './ListCard'
import { SaveButton } from './styled'

const ListContainer = (props) => {
  // console.log(props.items)
  return(
    
    <div>
      <ul>
        {props.items.map( item => <ListCard key={item.idx} item={item}/>)} 
      </ul>
      <SaveButton onClick={() => props.handleSubmitClick()}>Save List</SaveButton>
      <SaveButton onClick={() => props.handleDelete()}>Clear List</SaveButton>
    </div>

  )
}

export default ListContainer