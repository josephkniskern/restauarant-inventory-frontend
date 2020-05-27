import React from 'react'

class SearchBar extends React.Component {

  state = {
    searchTerm: "",
    term: ""
  }

  suggestionSelect = value => {
    this.setState({ 
      searchTerm: "",
      term: value
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
            key={Math.rand}>
              {product.name}
            </li>
          )}
        </ul>
        )
      }
    }
  

  render() {

    return(
      <div className="navbar navbar-light bg-light" id="searchBar">
        <form>
          <input
            className="form-control mr-sm-2" 
            type="text"
            placeholder="Search Products"
            onChange={event => this.handleSearch(event)}
          />
 
          {this.renderSearch()}
    
        </form>
      </div>
    )
  }
}

export default SearchBar