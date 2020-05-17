import React from 'react'
import Styles from './BuildControl.module.css'

const BuildControl = (props)=>{
    return(
        <div className={Styles.BuildControl}>
            <div className={Styles.Label}>{props.Label}</div>
            <button onClick={props.add} className={Styles.More}>More</button>
            <button onClick={props.sub} className={Styles.Less} disabled={props.disable}>Less</button>
        </div>
    );
};
export default (BuildControl)