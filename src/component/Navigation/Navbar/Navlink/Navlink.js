import React from 'react'
import Styles from './Navlink.module.css'

const Navlink = (props)=>(
    <li className={Styles.Navlink}><a className={props.active?Styles.active:null} href={props.link}>{props.children}</a></li>
)

export default Navlink;