import styled from "styled-components"
import Logo from "assets/images/logo.png"
import Search from "assets/images/search.png"
import Profile from "assets/images/profile.png"
import Down from "assets/images/down.png"
const HomeContainer = styled.div`
    height:100%;
     .miHsearch{
        height:0.89rem;
        display:flex;
        background:#f2f2f2;
        align-items: center;
    }
    .miHNav{
        display:flex;
        height:0.6rem;
        background:#f2f2f2;
        .miNavLef{
           padding-left:0.2rem;
            height: 100%;
            width: 318px;
            overflow: auto;
        }
        ul{
            height:100%;
            display:flex;
            align-items:center;
            width:7.5rem;
            li{
                margin: 0 0.22rem;
                line-height:0.56rem;
                text-align:center;
                color:#747474;
                font-size:0.26rem;
                font-family:Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
                border-bottom:2px solid rgba(237,91,0,0);
            }
            .active{
                border-color: rgb(237, 91, 0);
                color:rgb(237, 91, 0);
            }
        }
        span{
            flex:1;
            background:url(${Down}) no-repeat center center;
            background-size: 40%;
        }
    }
    .miSwiper{
        height:3.75rem;
    }
    .miLogo{
        background:url(${Logo}) no-repeat center center;
        background-size:50%;
        width:1.04rem;  
        height:100%
    }
    .miLogin{
        background:url(${Profile}) no-repeat center center;
        background-size:40%;
        width:1.04rem;  
        height:100%
    }
    .miSearch{
        display:flex;
        width: 5.56rem;
        height: 0.665rem;
        background: white;
        align-items: center;
        border-radius: 0.06rem;
      
        border:1px solid #e5e5e5;
        font-size:0.3rem;
        i {
            background:url(${Search});
            display:block;
            width:0.45rem;
            height:0.45rem;
            background-size:cover;
            margin: 0 0.15rem
        }
        input{
            border:none;
            width:3.5rem;
            line-height:0.6rem;
            color: rgba(0,0,0,.3);
        }
    }
    .miHome {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .miMain {
        overflow: auto;
        flex: 1;
    }
`

export {
    HomeContainer,
}