import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'
const OrderSummary = (props)=>{
    const order = (Object.keys(props.ingredients).map((keyIg)=>{
        return(<li>{keyIg}:{props.ingredients[keyIg]}</li>)
    }))
    return(
        <Fragment>
            <p>your order summary is:</p>
            <p>Price: {props.price.toFixed(2)}</p>
            <ul>
                {order}
            </ul>
            <p>would you like to continue?</p>
            <Button type="Danger" clicked={props.back}>CANCEL</Button>
            <Button type="Success" clicked={props.continue}>CONTINUE</Button>
        </Fragment>
    ) 
}

export default (OrderSummary)