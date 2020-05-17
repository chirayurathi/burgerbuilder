import React from 'react'
import Styles from './ToggleButton.module.css'

const ToggleButton = (props)=>(
    <div onClick={props.clicked} className={Styles.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default ToggleButton