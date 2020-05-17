import React from 'react'
import Styles from './Ingredients.module.css'
const Ingredients = (props)=>{
    let ingredients = null;
    switch(props.type){
        case('burger-bottom'):
            ingredients = <div className = {Styles.BreadBottom} ></div>;
            break;    
        case('burger-top'):
            ingredients=(
                        <div className = {Styles.BreadTop}>
                            <div className={Styles.Seeds1}></div>
                            <div className={Styles.Seeds2}></div>
                        </div>
                        );
            break;
        case('meat'):
            ingredients = <div className = {Styles.Meat}></div>
            break;
        case('cheese'):
            ingredients = <div className = {Styles.Cheese}></div>
            break;
        case('salad'):
            ingredients = <div className = {Styles.Salad}></div>
            break;
        case('bacon'):
            ingredients = <div className = {Styles.Bacon}></div>
            break;
        default:
            ingredients = null;
    }
    return (ingredients);
}
export default (Ingredients);