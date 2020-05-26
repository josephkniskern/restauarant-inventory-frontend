import React from 'react';

class AutoCompleteText extends React.Component {


  render() {
    return(
      <div>
        <input type="text" />
        <ul>
          {this.props.products.map(product => <li>{product.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default AutoCompleteText