import React from 'react'
import { SearchInput } from './styled'


class SearchBar extends React.Component {

  state = {
    searchTerm: "",
    term: ""
  }

  suggestionSelect = value => {
    this.setState({ 
      term: value,
      searchTerm: ""
    })

  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value})
    // console.log(event.target.value)
  }

  renderSearch = () => {
    let allProducts = this.props.products
    if (this.state.searchTerm !== "") {
      allProducts = allProducts.filter(product => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return  (
        <ul>
          {allProducts.map(product => <li 
            onClick={() => this.suggestionSelect(product)} 
            key={Math.rand}>{product.name}
            </li>
          )}
        </ul>
        )
      }
    }
  

  render() {

    return(
      <div className="search-bar">
        <div>
          <SearchInput 
            type="text"
            placeholder="Search"
            onChange={event => this.handleSearch(event)}
          />
 
          {this.renderSearch()}
    
        </div>
      </div>
    )
  }
}

export default SearchBar