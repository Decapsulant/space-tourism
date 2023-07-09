import React from 'react'
import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

interface TechnologyBlockProps {
    name:string
    description: string
  }

const TechnologyBlock:React.FC<TechnologyBlockProps> = ({name, description}) => {
  return (
    <motion.div initial="hidden" whileInView="visible" className='technology-block'>
        <motion.h5 custom={0} variants={elementAnimation} className="technology-block__subtitle">The terminology...</motion.h5>
        <motion.h3 custom={1} variants={elementAnimation} className="technology-block__name">{name}</motion.h3>
        <motion.p custom={2} variants={elementAnimation} className='technology-block__text'>{description}</motion.p>
    </motion.div>
  )
}
export default TechnologyBlock