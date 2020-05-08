import React, { Component } from 'react'
import { get } from "utils/http"
import Swiper from "components/swiper/Swiper"
import "./Miproduct.scss"
import connect from "./redux/connect"
class Miproduct extends Component {
    handClick = () => {
        this.props.changeCount({ id: this.state.productId });
        let list = [];
        if (localStorage.getItem('goodsId')) {
            list = JSON.parse(localStorage.getItem('goodsId'));
        }
        var rs = list.every((item,index)=>{
            return item!==this.state.productId;
        })
        if(rs){
            list.push(this.state.productId);
        }
        localStorage.setItem('goodsId', JSON.stringify(list));
    }
    bakClick = () => {
        this.props.history.push('/index/Home/mihome')
    }
    constructor() {
        super();
        this.state = {
            Swiperlist: [],
            title: "",
            productId: ''
        }
    }
    render() {
        return (
            <div className="miProductDetail">
                <i className="bak" onClick={this.bakClick}></i>
                <Swiper list={this.state.Swiperlist}></Swiper>
                <p className="miprotit">
                    {this.state.title}
                </p>
                <button className="btn" onClick={this.handClick}>加入购物车</button>
            </div>
        )
    }
    async getDetailproduct() {
        let product_id = window.location.href.split("miproduct/")[1]
        let result = await get('/api/detailProduct');
        let productThem = result.data.data.filter((item, index) => {
            return item.product_id === product_id
        })
        this.setState({
            Swiperlist: productThem[0].gallery_v3,
            title: productThem[0].title,
            productId: productThem[0].product_id
        })
    }
    componentDidMount() {
        this.getDetailproduct();
    }
}
export default connect(Miproduct)