import React, { Component } from 'react'
import { ProfileContainer } from "./Profile.style"
import "./Profile.scss"
import {post} from "utils/http"
export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username:"",
            password:""
        }
    }
    msgInput  =(e)=>{
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }
    handleSumit = async ()=>{
        console.log(this.state);
        localStorage.setItem("userIfo",JSON.stringify(this.state))
        let result = await post('/api/login',this.state);
        console.log(result);
        let msg = result.data.message;
        if(result.data.code===1){
            alert(msg);
            this.props.history.push('/index/Profile')
        }
    }
    bakClick  =()=>{
        this.props.history.push('/index')
    }
    render() {
        return (
            <ProfileContainer>
                <div className="miProfile">
                    <i className="miBak" onClick={this.bakClick}></i>
                    <span className="miProfileLogo"></span>
                    <span className="miLogin">小米帐号登录</span>
                    <form className="miForm">
                        <input type="text" className="miUser" name="username" onChange={this.msgInput} placeholder="邮箱/手机号码/小米ID" />
                        <input type="password" className="mips" name="password" onChange={this.msgInput} placeholder="密码" />
                        <input type="button" className="miSubmit" onClick={this.handleSumit} value="登录" />
                    </form>
                    <button className="miRegister">注册</button>
                </div>
            </ProfileContainer>

        )
    }
}
