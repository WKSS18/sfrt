import styled from "styled-components"
import bak from "assets/images/lgbak.png"
import search from "assets/images/search.png"
const ClassifyContainer = styled.div`
    height: 100%;
    .miClassify{
        height: 100%
    }
    .classifyHead{
        display:flex;
        height: 50px;
        align-items: center;
        background: #f4f4f4;
        /* justify-content: center; */
        font-size: 15.625px;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    .classifyBak{
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
    .classifySearch{
        display: block;
        background: url(${search});
        width: 0.62rem;
        height: 0.62rem;
        z-index: 2;
        background-size: cover;
        margin-right:0.2rem;
    }
   
}
`
export {
    ClassifyContainer
}