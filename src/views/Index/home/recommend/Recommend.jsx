import React, { Component } from 'react'
import {get} from "utils/http"
import  MiSwiper from "../components/Swiper"
import Daily from "./components/Daily"
import "./Recommend.scss"
export default class Recommend extends Component {
    constructor(){
        super();
        this.state = {
            Swiperlist:[],
            Dailylist:[]
        }
        
    }
    render() {
        return (
            <div className="miRecommend">
                <MiSwiper list={this.state.Swiperlist}></MiSwiper>
                <Daily lists={this.state.Dailylist}></Daily>
            </div>
        )
    }
    async getSwiperlist(){
        let result = await get("/api/miSwiper");
        this.setState({
            Swiperlist:result.data
        })
    }
    async getDailylist(){
        let result = await get('/api/daily');
        console.log(result)
        this.setState({
            Dailylist:result.data
        })
    }
    componentDidMount(){
        this.getSwiperlist();
        this.getDailylist();
    }
}
