import React from 'react'
import PurveyorCard from './PurveyorCard'


class PurveyorContainer extends React.Component {
  render() {
    
    return(
    <div>
      <PurveyorCard purveyor={this.props.purveyor} products={this.props.products} />
    </div>
    )
  }
}

export default PurveyorContainer