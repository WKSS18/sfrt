import { get } from 'utils/http'

const goodslist = (params) => {
    return (dispatch) => {
        get('/api/detailProduct').then((result) => {
            console.log(result, params);
            result = result.data.data.filter((item) => {
                return item.product_id === params.id
            })
            console.log(result);
            dispatch({ type: "AddGoods", data: result})
        })
    }
}

export {
    goodslist
}