const defaultState = {
    count:0
}
defaultState.count = Number(localStorage.getItem('count'));
const reducer = (state=defaultState,action)=>{
    defaultState.count = Number(localStorage.getItem('count'));
    switch(action.type){
        case "AddGoods":
            return {
                count:state.count +1
            }
        default:
            return state;
    }
}
export default reducer;