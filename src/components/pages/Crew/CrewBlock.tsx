import React from 'react'
import { CrewItems as CrewBlockProps } from '.'

 const CrewBlock:React.FC<CrewBlockProps> = ({name,role, bio, images}) => {
  return (
    <div className="container">
    <div className='crew-block'>
      <div className="crew-block__content">
        <h4 className="crew-block__role">{role}</h4>
        <h3 className="crew-block__name">{name}</h3>
        <p className='crew-block__bio'>{bio}</p>
      </div>
      <div className="crew-block__image">
        <img src={images.webp}/>
      </div>
      </div>
    </div>
  )
}
export default CrewBlock