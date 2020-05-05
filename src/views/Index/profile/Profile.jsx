import React, { Component } from 'react'
import { ProfileContainer } from "./Profile.style"
// import "./Profile.scss"
export default class Profile extends Component {
    render() {
        return (
            <ProfileContainer>
                <div className="miProfile">
                    <span className="miProfileLogo"></span>
                    <span className="miLogin">小米帐号登录</span>
                    <form className="miForm">
                        <input type="text" className="miUser" name="miuser" placeholder="邮箱/手机号码/小米ID" />
                        <input type="password" className="mips" name="mips" placeholder="密码" />
                        <input type="submit" className="miSubmit" value="登录" />
                    </form>
                    <button className="miRegister">注册</button>
                </div>
            </ProfileContainer>

        )
    }
}
