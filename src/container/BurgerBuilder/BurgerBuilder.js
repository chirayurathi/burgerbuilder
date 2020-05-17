import React,{Component, Fragment} from 'react'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE = {
    salad:0.3,
    cheese:0.4,
    meat:0.8,
    bacon:1.3
}
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            meat:0,
            bacon:0,
            cheese:0,
            salad:0
        },
        totalPrice:4,
        purchase:false,
        showOrder:false
    }
    canPurchase =(list)=>{
        let purchaseVal = Object.values(list)
        let purchasee = false
        for(let i=0;i<purchaseVal.length;i++){
            if(purchaseVal[i]>0){
                purchasee=true
                break
            }
        }
        this.setState({purchase:purchasee})
    }
    addIngredient = (type) =>{
        let updatedState = {
            ...this.state.ingredients
        }
        updatedState[type] = this.state.ingredients[type] +1;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients : updatedState,totalPrice:updatedPrice})
        this.canPurchase(updatedState)
    }
    lessIngredient = (type) =>{
        if (this.state.ingredients[type]===0) return;
        let updatedState = {
            ...this.state.ingredients
        }
        updatedState[type] = this.state.ingredients[type] -1;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({ingredients : updatedState,totalPrice:updatedPrice})
        this.canPurchase(updatedState)
    }
    BackHandler = ()=>{
        this.setState({showOrder:false})
    }
    continueHandler = ()=>{
        alert("continue");
    }
    showOrderHandler = ()=>{
        this.setState({showOrder:true})
    }
    render(){
        let stateCopy = {
            ...this.state.ingredients
        }
       for(let key in stateCopy){
            stateCopy[key] = stateCopy[key] <= 0
        }
        return(
            <Fragment>
                {this.state.showOrder?<Modal Backclicked={this.BackHandler} show={this.state.showOrder}><OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} back={this.BackHandler} continue={this.continueHandler}/></Modal>:null}
                <Burger ing = {this.state.ingredients}/>
                <BuildControls added={this.addIngredient} subed={this.lessIngredient} disable={stateCopy} purchaseable={this.state.purchase} price={this.state.totalPrice} order={this.showOrderHandler}/>
            </Fragment>

        );
    }
}

export default (BurgerBuilder)