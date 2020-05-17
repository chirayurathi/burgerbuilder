import React from 'react'
import Styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import ToggleButton from '../../Navigation/SideDrawer/ToggleButton/ToggleButton'
const Toolbar = (props)=>(
    <headder className={Styles.Toolbar}>
        <ToggleButton clicked={props.toggleClicked}/>
        <Logo height="80%"/>
        <nav className={Styles.DesktopOnly}><Navbar/></nav>
    </headder>
)

export default Toolbar