import React from 'react'
import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

type TechnologyImageProps = {
    name:string,
    image:string
}

export const TechnologyImage:React.FC<TechnologyImageProps> = ({name, image}) => {
  return (
    <motion.div initial="hidden" whileInView="visible">
        <motion.img variants={elementAnimation} custom={0} alt={name} className='technology__image' src={image}/>
    </motion.div>
  )
}
