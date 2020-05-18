import React from 'react'

class SearchBar extends React.Component {

  

  // state = {
  //   searchTerm: ""
  // }

  // handleChange = (filteredProducts) => {

  // }

  

  render() {
    // console.log(this.props.filteredProducts)


    // const filteredProducts = this.state.products.filter(product => 
    //   product.name.includes(this.state.searchTerm))

    return(
      <div className="search-bar">
        <div>
          <input placeholder="Search"></input>
        </div>
      </div>
    )
  }
}

export default SearchBar