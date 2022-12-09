import React from 'react'
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

import logo from "../assets/image/logo.svg"
import { elementTopAnimation } from '../animation'
const Header = () => {
const [openBurger, setOpenBurger] = React.useState(false)

const onclickOpenBurger = () => {
    setOpenBurger(!openBurger)
}
  return (
    <motion.header
    className='header'
    initial="hiden"
    whileInView="visible"
    custom={0}
    variants={elementTopAnimation} >
            <div className="header__inner">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className={`header__navbar header__navbar-overlay ${openBurger === true ? "header__navbar-show" : ""}`}>
                    <ul className="navbar">
                        <NavLink to={""} onClick={onclickOpenBurger}  className="navbar__item">
                            <span>00</span>
                            <p className="navbar__link">
                            Home
                            </p>
                        </NavLink>

                        <NavLink to={"/destination"} onClick={onclickOpenBurger}  className="navbar__item">
                            <span>01</span>
                            <p className="navbar__link">
                            Destination
                            </p>
                        </NavLink>

                        <NavLink to={"/crew"} onClick={onclickOpenBurger}  className="navbar__item">
                            <span>02</span>
                            <p className="navbar__link">
                            Crew
                            </p>
                        </NavLink>

                        <NavLink to={"/technology"} onClick={onclickOpenBurger}  className="navbar__item">
                            <span>03</span>
                            <p className="navbar__link">
                            Technology
                            </p>
                        </NavLink>
                    </ul>
                </nav>
                <div onClick={onclickOpenBurger} className={`header__burger-none ${openBurger === true ? "header__burger-close": "header__burger"}`}><span></span></div>
            </div>
    </motion.header>
  )
}
export default Header;