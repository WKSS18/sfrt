import React, { Component } from 'react'
import {get} from "utils/http"
import  MiSwiper from "../components/Swiper"
export default class Recommend extends Component {
    constructor(){
        super();
        this.state = {
            Swiperlist:[]
        }
    }
    render() {
        return (
            <div className="miRecommend">
                <MiSwiper list={this.state.Swiperlist}></MiSwiper>
            </div>
        )
    }
    async getSwiperlist(){
        let result = await get("/api/miSwiper");
        this.setState({
            Swiperlist:result.data
        })
    }
    componentDidMount(){
        this.getSwiperlist();
    }
}
