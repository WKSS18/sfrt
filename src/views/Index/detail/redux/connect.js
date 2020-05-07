import {connect} from "react-redux"
import {goodslist} from './actionCreators'
const Countnum = (state)=>{
    return {
        count:state.Detail.count
    }
}

const countDispatch=(dispatch)=>{
    return {
      changeCount:()=>{
        dispatch({type:'goodsCount'})
      },
      goodsData:(params)=>{
        console.log(params)
        dispatch(goodslist(params))
      }
    }
  }

  export default connect(Countnum,countDispatch);