import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section className='notfound'>
        <div className="container">
            <h4 className='notfound__title'>Pages Not Found</h4>
            <Link className='notfound__btn' to="">Return home</Link>
        </div>
    </section>
  )
}
export default NotFound;