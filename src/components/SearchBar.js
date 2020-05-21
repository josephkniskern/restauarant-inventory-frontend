import React from 'react'
import { SearchInput } from './styled'

class SearchBar extends React.Component {


  

  render() {
    return(
      <div className="search-bar">
        <div>
          <SearchInput 
            type="text"
            placeholder="Search"
            onChange={event => this.props.handleSearch(event)}
          /> 
        </div>
      </div>
    )
  }
}

export default SearchBar