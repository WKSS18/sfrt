import {connect} from "react-redux"

const goodscount = (state)=>{
    return {
        count:state.Detail.count
    }
}

const countDispatch=(dispatch)=>{
    return {
      changeCount:()=>{
        dispatch({type:'AddGoods'})
      }
    }
  }

  export default connect(goodscount,countDispatch);