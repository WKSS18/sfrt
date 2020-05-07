import React, { Component } from 'react'
import {get} from "utils/http"
import Swiper from "components/swiper/Swiper"
import Classify from "./components/Classify"
import Product from "./components/Product"
import "./Micapacity.scss"
export default class Micapacity extends Component {
    constructor(){
        super();
        this.state = {
            Swiperlist:[],
            Classifylist:[],
            Productlist:[]
        }
    }
    render() {
        return (
            <div className="miCapacity">
                <Swiper list={this.state.Swiperlist}></Swiper>
                <Classify list={this.state.Classifylist}></Classify>
                <div className="productHot">
                    <img src="//i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp" alt=""/>
                    <Product list={this.state.Productlist}></Product>
                </div>
            </div>
        )
    }
    async getDailylist(){
        let result = await get('/api/daily');
        this.setState({
            Swiperlist:result.data.capacity[0].swiper,
            Classifylist:result.data.capacity[0].classify,
            Productlist:result.data.capacity[0].product,

        })
    }
    componentDidMount(){
        this.getDailylist();
    }
}
