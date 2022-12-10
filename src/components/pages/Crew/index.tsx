import axios from 'axios'
import React from 'react'
import { Images } from '../Destination'
import CrewBlock from './CrewBlock'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel'
import MediaQuery from 'react-responsive';

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const getCrew = () => {
    try{
      axios.get(`https://63404624e44b83bc73cd3e47.mockapi.io/Crew`)
    .then(res => {
      setItems(res.data)
      console.log(res.data)
    }).catch(err => setError(true))
    }catch(err){
      setError(true)
    }
  }


  React.useEffect(() =>{
    getCrew()
  },[])




  return (
    <motion.section
    initial="hiden"
    whileInView="visible"
    className='crew'>
        <div className="container">
        <motion.h4 variants={elementAnimation} className='page__title'><span>02</span>Meet your crew</motion.h4>
          <motion.div variants={elementAnimation} className="crew__inner">

            {error ? <div className='error'>Error with network</div>
            :<>
            <MediaQuery maxWidth={1110}>
          <Slider {...settings}>
             {items.map(obj =><CrewBlock key={obj.role} {...obj}/> )}
          </Slider>
            </MediaQuery>

            <MediaQuery minWidth={1110}>
            <Carousel showThumbs={false}  showArrows={false} autoPlay={true}
          interval={10000} swipeable={true} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={40} infiniteLoop={true} transitionTime={1000}>
            {items.map(obj =><CrewBlock key={obj.role} {...obj}/> )}
          </Carousel>
            </MediaQuery>

            </>
          }



          </motion.div>
        </div>
    </motion.section>
  )
}
export default Crew