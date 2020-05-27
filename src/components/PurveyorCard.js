import React from 'react'
import ProductCard from './ProductCard'



const PurveyorCard = (props) => {

  return(
    <div className="col">
      <h2>{props.purveyor.name}</h2>
      <div>
        {props.purveyor.products.map(product => 
          <ProductCard 
            key={product.id} 
            product={product} 
            handleClick={props.handleClick}
          />
        )}
      </div>
    </div>
  )

}

export default PurveyorCard