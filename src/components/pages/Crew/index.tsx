import axios from 'axios'
import React from 'react'
import { Images } from '../Destination'
import CrewBlock from './CrewBlock'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'


export interface CrewItems {
    name:string
    images:Images
    role: string
    bio: string
}

 const Crew = () => {
  const [items, setItems] = React.useState<CrewItems[]>([])
  const [error, setError] = React.useState(false)

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    fade:true,
  };


  React.useEffect(() =>{

    const  getCrew = async() => {
      try{
      const {data}= await axios.get(`https://63404624e44b83bc73cd3e47.mockapi.io/Crew`)
      setItems(data)
      }catch(err){
        setError(true)
      }
    }
    getCrew()
  },[])




  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    className='crew'>
        <div className="container">
        <motion.h4 variants={elementAnimation} className='page__title'><span>02</span>Meet your crew</motion.h4>
          <div className="crew__inner">

            {error ? <div className='error'>connection error</div>
            :<>
            <div>
        <Slider {...settings}>
            {items.map(obj =><CrewBlock key={obj.role} {...obj}/> )}
        </Slider>
        </div>
            </>
          }



          </div>
        </div>
    </motion.section>







  )
}
export default Crew