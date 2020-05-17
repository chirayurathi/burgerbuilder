import React,{Fragment,Component} from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Styles from './Layout.module.css'
class Layout extends Component{
    state={
        showSide:false
    }
    sideCloseHandler = ()=>{
        this.setState({showSide:false})
    }
    toggleHandler = ()=>{
        this.setState((prev)=>({showSide:!prev.showSide}))
    }
    render() {
        return(
            <Fragment>
                <Toolbar toggleClicked={this.toggleHandler}/>
                <SideDrawer navBack={this.sideCloseHandler} showSide={this.state.showSide}/>
                <main className={Styles.Content}>{this.props.children}</main>
            </Fragment>
        )
    }
}

export default (Layout)