import React from 'react'
import { Items}   from './index'
import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

const DestinationBlock:React.FC<Items> = ({name, description,distance,travel,images}) => {
  return (
    <motion.div initial="hidden" whileInView="visible" className='destination-block'>
      <div className='destination-block__wrapper-img'>
        <motion.img custom={1} variants={elementAnimation}  src={images.webp} alt="planet" />
      </div>
      <div className='destination-block__content'>
      <motion.h2 custom={0} variants={elementAnimation} className="destination-block__title">{name}</motion.h2>
          <motion.p custom={1} variants={elementAnimation} className="destination-block__text">{description}</motion.p>
          <hr className='destination-block__line'/>
          <div className="destination-block__travel">
          <div className="destination-block__travel-disctance">
            <motion.h5 custom={2} variants={elementAnimation} className="destination-block__travel-title">Avg. Distance</motion.h5>
            <motion.div custom={3} variants={elementAnimation} className="destination-block__travel-value">{distance}</motion.div>
          </div>
          <div className="destination-block__travel-time">
            <motion.h5 custom={2} variants={elementAnimation} className="destination-block__travel-title">Est. travel time</motion.h5>
            <motion.div custom={3} variants={elementAnimation} className="destination-block__travel-value">{travel}</motion.div>
          </div>
          </div>
      </div>
    </motion.div>
  )
}
export default DestinationBlock