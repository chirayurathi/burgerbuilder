import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const SideDrawer = (props)=>{
    let showslidestyle = [Styles.SideDrawer,Styles.Open];
    if(props.showSide){
        showslidestyle =  [Styles.SideDrawer,Styles.Open]
    }
    else{
        showslidestyle =  [Styles.SideDrawer,Styles.Close]
    }
    return(
    <Fragment>
        {props.showSide?<Backdrop clicked={props.navBack}/>:null}
    <div className={showslidestyle.join(' ')}>
        <Logo height="9%"/>
        <Navbar/>
    </div>
    </Fragment>
    
)}

export default SideDrawer; 