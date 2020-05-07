import styled from "styled-components"
import bak from "assets/images/lgbak.png"
import search from "assets/images/search.png"
const LogoutContainer = styled.div`
    height:100%;
    .logoutCount{
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .logoutHead{
        display:flex;
        height: 50px;
        align-items: center;
        background: #f4f4f4;
        /* justify-content: center; */
        font-size: 15.625px;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    .lgBak{
        display: block;
        background: url(${bak});
        width: 0.54rem;
        height: 0.54rem;
        z-index: 2;
        background-size: cover;
        margin-left:0.2rem;
    }
    span{
        flex:1;
        text-align:center;
    }
    .lgSearch{
        display: block;
        background: url(${search});
        width: 0.62rem;
        height: 0.62rem;
        z-index: 2;
        background-size: cover;
        margin-right:0.2rem;
    }
}
.logoutFoot {
    display: block;
    width: 100%;
    height: 100%;
    font-size: .3rem;
    background: #f4f4f4;
    color: #3c3c3c;
    height: 1rem;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    text-align: center;
}
.logoutMain{
    flex:1;
}
`
export {
    LogoutContainer
}