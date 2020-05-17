import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import Styles from './BuildControls.module.css'
const BuildControls = (props)=>{
    const items = [
        {label:'Salad',type:'salad'},
        {label:'Meat',type:'meat'},
        {label:'Cheese',type:'cheese'},
        {label:'Bacon',type:'bacon'}
    ];
    return(
        <div className={Styles.BuildControls}>
            <p>total price:<strong>{props.price.toFixed(2)}</strong></p>
            {items.map(Label=>{
                return(
                    <BuildControl key={Label.label} Label={Label.label} add={()=>{props.added(Label.type)}} sub={()=>{props.subed(Label.type)}} disable={props.disable[Label.type]}/>
                )
            })}
            <button disabled={!props.purchaseable} className={Styles.OrderButton} onClick={props.order}>Order now</button>
        </div>
        
    );
}
export default (BuildControls) 