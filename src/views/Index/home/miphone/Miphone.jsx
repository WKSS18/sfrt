import React, { Component } from 'react'
import  MiSwiper from "./components/Swiper"
import {get} from "utils/http"
import Phones from "./components/Phones"
import "./Miphone.scss"
export default class Miphone extends Component {
    constructor(){
        super();
        this.state = {
            Swiperlist:[],
            Miphonelist:[]
        }
    }
    render() {
        return (
        <div className="miPhone">
            <MiSwiper list={this.state.Swiperlist}></MiSwiper>
            <Phones lists={this.state.Miphonelist}></Phones>
        </div>
        )
    }
    async getDailylist(){
        let result = await get('/api/daily');
        this.setState({
            Swiperlist:result.data.phone[0].swiper,
            Miphonelist:result.data.phone[0].product
        })
    }
    componentDidMount(){
        this.getDailylist();
    }
}
