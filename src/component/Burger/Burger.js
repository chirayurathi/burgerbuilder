import React from 'react'
import Ingredients from './Ingredients/Ingredients'
import Style from './burger.module.css'
const Burger = (props)=>{
    let ingredientMaker = Object.keys(props.ing).map(keyIg =>{
        return ([...Array(props.ing[keyIg])].map((_,i)=>{return <Ingredients key = {keyIg+i} type={keyIg} />})
    );}).reduce((arr,el)=>{return arr.concat(el)},[]);
    if(ingredientMaker.length===0){
        ingredientMaker = <p>please start adding meterials to your burger </p>;
    }
    return(
        <div className = {Style.Burger}>
            <Ingredients type="burger-top"></Ingredients>
            {ingredientMaker}
            <Ingredients type="burger-bottom"></Ingredients>
        </div>
    );
};
export default (Burger);