const defaultState = {
    count:0,
}
const reducer = (state=defaultState,action)=>{
    defaultState.count = Number(localStorage.getItem('count'));
    switch(action.type){
        case "goodsCount":
            return {
                count:state.count +1
            }
        case "AddGoods":
            console.log('aaa');
            const rs = require('mock/goods.json');
            console.log(rs);
            return {
                count: state.count
            }
        default:
            return state;
    }
}
export default reducer;