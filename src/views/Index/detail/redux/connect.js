import {connect} from "react-redux"
import {goodslist} from './actionCreators'
const Countnum = (state)=>{
    return {
        count:state.Detail.count,
        datalist:state.Detail.datalist
    }
}

const countDispatch=(dispatch)=>{
    return {
      changeCount:(params)=>{
        // dispatch({type:'goodsCount'})
        dispatch(goodslist(params))
      },
      // goodsData:(params)=>{
      //   console.log(params)
      //   dispatch(goodslist(params))
      // }
    }
  }

  export default connect(Countnum,countDispatch);