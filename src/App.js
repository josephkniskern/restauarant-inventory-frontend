import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SearchBar from './components/SearchBar';



class App extends React.Component {

  state = {
    purveyors: [],
    products: [],
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/purveyors")
    .then(response => response.json())
    .then(data => {
      this.setState({ purveyors: data })
    })

    fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => this.setState({ products: data }))
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value})
    console.log(event.target.value)
  }






  render() {
    let allProducts = this.state.products
    if (this.state.searchTerm !== "") {
      allProducts = allProducts.filter(product => product.name.includes(this.state.searchTerm))
    }
    // console.log(this.state)
    return (
      <div className="container">

        <SearchBar 
    
        
          products={this.state.products}
          />
        <MainContainer 
          purveyors={this.state.purveyors} 
          products={allProducts} 
          />
      </div>
    );
  }
}

export default App;
