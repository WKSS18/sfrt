import React, { Component } from 'react'
import { get } from "utils/http"
import Swiper from "components/swiper/Swiper"
export default class Miproduct extends Component {
    constructor(){
        super();
        this.state = {
            Swiperlist:[]
        }
    }
    render() {
        return (
            <div className="miProductDetail">
                <Swiper list={this.state.Swiperlist}></Swiper>   
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
            Swiperlist:productThem[0].gallery_v3
        })
        console.log(this.state.Swiperlist)
    }
    componentDidMount() {
        this.getDetailproduct();
    }
}
