import React, { Component } from 'react'
import "./user.scss"
export default class User extends Component {
    clickOut = () => {
        console.log('a');
        console.log(this.props);
        this.props.history.push('/logout')
    }
    render() {
        return (
                <div className="loginSuccess">
                    <div className="loginCshead">
                        <span className="loginImg">
                            <img src="" alt="" />
                        </span>
                        <span className="loginName">
                            {JSON.parse(localStorage.getItem('userIfo')).username}
                        </span>
                    </div>
                    <div className="clip"></div>
                    <div className="loginMain">
                        <div className="loginSet" onClick={this.clickOut}>
                            <i></i>
                            <span>设置</span>
                        </div>
                    </div>
                </div>
        )
    }
}
