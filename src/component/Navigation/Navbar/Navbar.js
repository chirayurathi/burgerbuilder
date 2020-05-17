import React from 'react'
import Styles from './Navbar.module.css'
import Navlink from './Navlink/Navlink'
const Navbar = (props)=>(
    <ul className={Styles.Navbar}>
        <Navlink link="/" active>Burger Builder</Navlink>
        <Navlink link="/">Checkout</Navlink>
    </ul>
)

export default Navbar;