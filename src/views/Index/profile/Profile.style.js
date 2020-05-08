import styled from "styled-components"
import { Border } from "components/border/Border"
import miLogo from "assets/images/milogo.png"
import miBak from "assets/images/back.png"
const ProfileContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    .miBak{
        background: url(${miBak}) center center no-repeat #ff6700;
        width: 39px;
        height: 39px;
        color: black;
        display: block;
    }   
    .miProfileLogo{
        height:0.96rem;
        background-size:cover;
        background:url(${miLogo}) center center no-repeat;
        display:block;
        margin-top:0.6rem;
    }
    .miLogin {
    font-size: 0.36rem;
    padding-top:0.4rem;
    display: block;
    text-align: center;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.miForm {
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding-left:0.4rem;
    input{
        border:none;
        width:6.7rem;
    }
    .miUser{
        border-bottom:1px solid #ccc;
        height: 1.06rem;
        font-size: 0.36rem;
        margin-top:0.3rem;
    }
    .mips{
        border-bottom:1px solid #ccc;
        height: 1.06rem;
        font-size: 0.36rem;
    }
    .miSubmit{
        background:#ff6700;
        height:0.88rem;
        border-radius:0.1rem;
        color:white;
        font-size:0.36rem;
        margin-top:0.4rem;
    }

}
.miRegister {
    width: 6.7rem;
    background: none;
    border: none;
    border: 1px solid #d3d3d3;
    border-radius: 0.12rem;
    height: 0.92rem;
    margin-top: 0.4rem;
    margin-left:0.4rem;
    font-size:0.36rem;
    color:#000;
}
`

export {
    ProfileContainer,
}