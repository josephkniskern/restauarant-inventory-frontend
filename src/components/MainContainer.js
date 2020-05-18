import React from 'react'
import PurveyorContainer from './PurveyorContainer'


class MainContainer extends React.Component {



  render() {
    return(
      <div>
        {this.props.purveyors.map(purveyor => <PurveyorContainer 
          key={purveyor.id} 
          purveyor={purveyor} 
          products={this.props.products} 
          />
          )}
      </div>
    )
  }
}

export default MainContainer