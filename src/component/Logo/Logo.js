import React from 'react'
import BurgerLogo from '../../asset/images/burger-logo.png'
import Styles from './Logo.module.css'
const Logo = (props) =>(
    <div style={{height:props.height}} className={Styles.Logo}>
        <img src={BurgerLogo} alt="logo"/>
    </div>
)
export default Logo