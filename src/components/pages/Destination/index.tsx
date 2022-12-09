import axios from 'axios'
import React from 'react'
import DestinationBlock from './DestinationBlock'
import {motion} from "framer-motion"
import { elementAnimation } from '../../../animation'

type NavbarData = {name:string}
const navbarData:NavbarData[] = [
  {name:"Moon"},
  {name:"Mars"},
  {name:"Europa"},
  {name:"Titan"}
]
export type Images = {
  png:string,
  webp:string
}

export interface Items {
  id:string
  name: string
  images: Images
  description: string
  distance: string
  travel: string
  }

 const Destination = () => {
  const [items, setItems] = React.useState<Items[]>([])
  const [planetId,setPlanetId] = React.useState(0)
  const [isError, setIsError] = React.useState(false)

  const onChangePlanets = (id:number) => {
    setPlanetId(id)
  }

  const getDestination = () => {
    try{
      axios.get<Items[]>(`https://63404624e44b83bc73cd3e47.mockapi.io/destinations?id=${planetId}`)
      .then(res => {
        setItems(res.data)
      }).catch(err => setIsError(true))
      }catch(err){
        setIsError(true)
      }finally{

      }
  }

  React.useEffect(() =>{
    getDestination()
  },[planetId])


  return (
    <motion.section
    initial="hiden"
    whileInView="visible"
    className='destination'>
      <div className="container">
          <motion.h4 variants={elementAnimation} custom={0} className='page__title'><span>01</span>Pick your destination</motion.h4>
          <motion.div variants={elementAnimation} className='destination__inner'>
    

        
          {isError ? <div className='error'>Error with network</div>
          :<>
          {items.map(obj => <img  className='destination__img' alt='destination' key={obj.id} src={obj.images.webp}/>)}
          <div className="destination__content">
          <div className='destination__navbar-wrapper'>
          <ul className="destination__navbar">
            {navbarData.map((obj,i) => <li key={obj.name}>
                <a onClick={() =>onChangePlanets(i)} className={planetId === i ? "destination__navbar-link destination__navbar-link--active" : 'destination__navbar-link'}>{obj.name}
                </a>
              </li>)}
          </ul>
          </div>
          {items.map(obj => <DestinationBlock key={obj.name} {...obj}/>)}
          </div>
          </>
          }
          </motion.div>
      </div>
    </motion.section>
  )
}
export default Destination
