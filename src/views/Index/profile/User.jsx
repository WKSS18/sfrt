import React, { Component } from 'react'
import "./user.scss"
import { withRouter } from 'react-router-dom'
class User extends Component {
    clickOut = () => {
        this.props.history.push('/logout')
    }
    handleLogin=()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
                <div className="loginSuccess">
                    <div className="loginCshead">
                        <span className="loginImg">
                            <img src="" alt="" />
                        </span>
                        <span className="loginEntry" style={{display: localStorage.getItem('userIfo') ? 'none' : 'block'}}  onClick={this.handleLogin}>登录</span>
                        <span className="loginName" style={{display: localStorage.getItem('userIfo') ? 'block' : 'none'}}>
                            {JSON.parse(localStorage.getItem('userIfo')) ? JSON.parse(localStorage.getItem('userIfo')).username : ''}
                        </span>
                    </div>
                    <div className="clip"></div>
                    <div className="loginMain" style={{display: localStorage.getItem('userIfo') ? 'block' : 'none'}}>
                        <div className="loginSet" onClick={this.clickOut}>
                            <i></i>
                            <span>设置</span>
                        </div>
                    </div>
                </div>
        )
    }
}
export default withRouter(User)