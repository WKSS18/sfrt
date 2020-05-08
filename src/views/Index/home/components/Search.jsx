import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Search extends Component {
    bakClick = () => {
        this.props.searchGood();
    }
    loginClick = ()=>{
        if(localStorage.getItem('userIfo')){
            this.props.history.push('/user')
        }else{
            this.props.history.push('/login')
        }
    }
    render() {

        return (

            <div className="miHsearch">
                <div className="miLogo"></div>
                <div className="miSearch">
                    <i></i>
                    <input onClick={this.bakClick} readOnly type="text" placeholder="搜索商品名称" />
                </div>
                <div className="miLogin" onClick={this.loginClick}></div>
            </div>
        )


    }
    componentDidMount() {
    }
}

export default withRouter(Search);