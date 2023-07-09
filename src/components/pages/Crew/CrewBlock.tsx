import React from 'react'
import { CrewItems as CrewBlockProps } from '.'
import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

 const CrewBlock:React.FC<CrewBlockProps> = ({name,role, bio, images}) => {
  return (
    <motion.div initial="hidden" whileInView="visible" className='crew-block'>
      <div className="crew-block__content">
        <motion.h4 custom={0} variants={elementAnimation} className="crew-block__role">{role}</motion.h4>
        <motion.h3 custom={1} variants={elementAnimation} className="crew-block__name">{name}</motion.h3>
        <motion.p custom={2} variants={elementAnimation} className='crew-block__bio'>{bio}</motion.p>
      </div>
      <div className="crew-block__image">
        <motion.img custom={1} variants={elementAnimation} src={images.webp} alt={name}/>
      </div>
      </motion.div>
  )
}
export default CrewBlock