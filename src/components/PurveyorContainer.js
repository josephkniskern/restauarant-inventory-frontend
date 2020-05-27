import React from 'react'
import PurveyorCard from './PurveyorCard'



class PurveyorContainer extends React.Component {
  render() {
    
    return(
    <div className="col-sm">
      <PurveyorCard 
        purveyor={this.props.purveyor} 
        products={this.props.products} 
        handleClick={this.props.handleClick}
        />
    </div>
    )
  }
}

export default PurveyorContainer