import React from 'react'
import PurveyorContainer from './PurveyorContainer'
import ListContainer from './ListContainer'


class MainContainer extends React.Component {

  state = {
    items: [],
    lists: []
  }

  
  handleClick = (event) => {
    this.setState({ items: [...this.state.items, event] })
    /// post to the create a joiner between the product and the user 
  }

  handleSubmitClick = () => {
    alert("submit clicked")
    this.state.items.forEach(item => {
      fetch("http://localhost:3000/api/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json"
        },
        body: JSON.stringify({
          ///res id is hardcoded,if I reseed I need to update it
          restaurant_id: 1,
          product_id: item.id
        })
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          lists: [...this.state.lists, response]
        })
      })
    })
  }

  handleDelete = () => {
    
    alert("delete clicked")
    this.state.lists.forEach(list => {
      
      fetch(`http://localhost:3000/api/lists/${list.id}`, {
        method: "DELETE"
      }) 
    }) 
    return this.setState({ lists: [] })
  }

  // handleSearch = (event) => {
  //   this.setState({ searchTerm: event.target.value})
  // }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/restaurants/1")
    .then(response => response.json())
    .then(response => {
      this.setState({
        items: response.products
      })
    })
  }

  render() {
  
    console.log(this.state.lists)
    return(
      <div className="row">
        {this.props.purveyors.map(purveyor => <PurveyorContainer 
          key={purveyor.id} 
          purveyor={purveyor} 
          products={this.props.products} 
          handleClick={this.handleClick}
          />
          )}
          <div className="fixed-bottom">
            <div className="table">
              <ListContainer 
                class="collapse" 
                id="navbarToggleExternalContent"
                items={this.state.items} 
                handleSubmitClick={this.handleSubmitClick}
                handleDelete={this.handleDelete}
                />
            </div>
          </div>
      </div>
        
      
    )
  }
}

export default MainContainer