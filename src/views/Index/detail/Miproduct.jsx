import React, { Component } from 'react'
import { get } from "utils/http"
import Swiper from "components/swiper/Swiper"
import "./Miproduct.scss"
import connect from "./redux/connect"
class Miproduct extends Component {
    handClick = ()=>{
        console.log(this.props);
        this.props.changeCount();
    }
    bakClick = ()=>{
        this.props.history.push('/index/Home/mihome')
    }
    constructor(){
        super();
        this.state = {
            Swiperlist:[],
            title:"",
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
        console.log(result.data.data);
        let productThem = result.data.data.filter((item, index) => {
            return item.product_id === product_id
        })
        console.log(productThem);
        this.setState({
            Swiperlist:productThem[0].gallery_v3,
            title:productThem[0].title
        })
        console.log(this.state.Swiperlist)
    }
    componentDidMount() {
        this.getDetailproduct();
    }
}
export default connect(Miproduct)