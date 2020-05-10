import styled from "styled-components"
import lgBak from "assets/images/sbak.png"
import sBtn from "assets/images/search.png"
const SearchContainer = styled.div`
    height:100%;
    overflow:hidden;
    .miSearHead {
        height: 41.66px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
    }
    .searchBak{
        background:url(${lgBak}) no-repeat center center;
        display:block;
        width:0.52rem;
        height:0.52rem;
        background-size:90%;
    }
    .searchBtn{
        background:url(${sBtn}) no-repeat center center;
        display:block;
        width:0.63rem;
        height:0.63rem;
        background-size:90%;
    }
    input{
        flex:1;
    }
    input[type="text"] {
    border: none;
    height: .52rem;
    outline: none;
    border: 1px solid #e5e5e5;
    font-size:0.15rem;
    padding-left:0.2rem;
}

    i.searchBak {margin-right: 0.2rem;}

    i.searchBtn {
        margin-left: 0.2rem;
    }
    li{
        list-style:none;
        font-size:0.25rem;
    }
    p{
        text-align:center;
          .titImg{
            width: 6.56rem;
            height: 1.07rem;
            border-radius: .16rem;
        }
    }
    p.titThem {
        vertical-align: text-top;
        display: inline-block;
        text-align: center;
        line-height: .23rem;
        margin-right: .6rem;
        font-family: Microsoft yahei;
        /* margin-left: 0.47rem; */
        font-weight: 600;
        margin: 0.4rem 0;
        margin-left: 0.47rem;
    }
    ul.titList li {
        width: 3rem;
        /* flex: 1; */
        padding: 0.2rem 0;
    }
    ul.titList {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.4rem;
        margin-top: 0.3rem;
    }
    .msg{
        margin: 1.2rem;
        color: red;
        font-size: 0.4rem;
    }
    ul.searchList li {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 0 0.6rem;
    background: white;
}

ul.searchList {
    background: rgba(0,0,0,.5)!important;
    height: 100%;
}

.sc-AxhUy.bSdWGS {
    height: 100%;
}
`
export {
    SearchContainer
}