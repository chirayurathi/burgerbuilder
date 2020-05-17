import React, { Fragment } from 'react'
import Styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
const Modal =(props)=>(
    <Fragment>
        <Backdrop clicked={props.Backclicked}/>
        <div className={Styles.Modal}>
            {props.children}
        </div>
    </Fragment>
    
)

export default Modal;