import React, { Component } from 'react'
import { LogoutContainer } from "./Logout.style.js"
export default class Logout extends Component {
    clickOut = ()=>{
        localStorage.removeItem('userIfo');
        this.props.history.push('/login')
    }
    clickBak = ()=>{
        this.props.history.push('/user')
    }
    render() {
        return (
            <LogoutContainer>
                <div className="logoutCount">
                    <div className="logoutHead">
                        <i className="lgBak" onClick={this.clickBak}></i>
                        <span>个人中心</span>
                        <i className="lgSearch"></i>
                    </div>
                    <div className="logoutMain">

                    </div>
                    <div className="logoutFoot" onClick={this.clickOut}>
                        <span>退出账号</span>
                    </div>
                </div>
            </LogoutContainer>
        )
    }
}
