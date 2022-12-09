import React from 'react'
import { Items as ItemsProps}   from './index'


const DestinationBlock:React.FC<ItemsProps> = ({name, description,distance,travel}) => {
  return (
    <div className='destnination-block'>
          <h2 className="destination-block__title">{name}</h2>
          <p className="destination-block__text">{description}</p>
          <hr className='destination-block__line'/>
          <div className="destination-block__travel">
          <div className="destination-block__travel-disctance">
            <h5 className="destination-block__travel-title">Avg. Distance</h5>
            <div className="destination-block__travel-value">{distance}</div>
          </div>
          <div className="destination-block__travel-time">
            <h5 className="destination-block__travel-title">Est. travel time</h5>
            <div className="destination-block__travel-value">{travel}</div>
          </div>
          </div>
    </div>
  )
}
export default DestinationBlock