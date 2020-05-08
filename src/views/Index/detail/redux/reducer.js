
const defaultState = {
    datalist: [],
    count: 0,
    goodsstate:false
}
const reducer = (state = defaultState, action) => {
    defaultState.count = Number(localStorage.getItem('count'));
    let list = state.datalist;
    if (action.data) {
        if (list.every((item)=>{
            return item.product_id !== action.data.product_id
        })) {
            state.goodsstate =false;
            action.data.num=1;
        } else {
            state.goodsstate = true;
            action.data = list.filter((item) => {
                return action.data.product_id === item.product_id
            })[0];
            action.data.num++;
        }
    }

    
    switch (action.type) {
        case "goodsCount":
            return {
                count: state.count + 1,
                datalist: state.goodsstate ? list :  list.concat(action.data)
            }
        default:
            return state;
    }
}
export default reducer;