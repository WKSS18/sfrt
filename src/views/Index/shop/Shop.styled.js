import styled from "styled-components"
import bak from "assets/images/lgbak.png"
import search from "assets/images/search.png"
const ShopContainer = styled.div`
    height:100%;
    .shopCount{
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .shopHead{
        display:flex;
        height: 50px;
        align-items: center;
        background: #f4f4f4;
        /* justify-content: center; */
        font-size: 15.625px;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    .shopBak{
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
    .shopSearch{
        display: block;
        background: url(${search});
        width: 0.62rem;
        height: 0.62rem;
        z-index: 2;
        background-size: cover;
        margin-right:0.2rem;
    }
   
}
.proImg img {
        width: 91.75px;
        height: 91.75px;
    }

    .shopList li {
        list-style: none;
        padding:15px;
    }

    .shopList li {
    display: flex;
    align-items: center;
}

p.proTit {
    font-size: .28rem;
    line-height: .32rem;
    color: #666;
    margin-bottom: .12rem;
    margin-right: .3rem;
    padding: 0;
}
p.proPrice {
    padding: .12rem 0;
    font-size: .24rem;
    color: #999;
    margin-bottom: .12rem;
}
.proNum{
    padding: .12rem 0;
    font-size: .24rem;
    color: #999;
    margin-bottom: .12rem;
}
.proDetail {
    margin-left: 25px;
}
`
export {
    ShopContainer
}