import React from 'react'
import PurveyorCard from './PurveyorCard'
import { PurveyorRow } from './styled'


class PurveyorContainer extends React.Component {
  render() {
    
    return(
    <PurveyorRow>
      <PurveyorCard 
        purveyor={this.props.purveyor} 
        products={this.props.products} 
        handleClick={this.props.handleClick}
        />
    </PurveyorRow>
    )
  }
}

export default PurveyorContainer