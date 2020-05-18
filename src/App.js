import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SearchBar from './components/SearchBar';


class App extends React.Component {

  state = {
    purveyors: [],
    purveyorsProducts: []
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





  render() {
    

    return (
      <div className="App">
        <SearchBar products={this.state.products}/>
        <MainContainer purveyors={this.state.purveyors} products={this.state.products} />
      </div>
    );
  }
}

export default App;
