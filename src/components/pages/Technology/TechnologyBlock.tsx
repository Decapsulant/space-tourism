import React from 'react'

interface TechnologyBlockProps {
    name:string
    description: string
  }

const TechnologyBlock:React.FC<TechnologyBlockProps> = ({name, description}) => {
  return (
    <div className='technology-block'>
        <h5 className="technology-block__subtitle">The terminology...</h5>
        <h3 className="technology-block__name">{name}</h3>
        <p className='technology-block__text'>{description}</p>
    </div>
  )
}
export default TechnologyBlock