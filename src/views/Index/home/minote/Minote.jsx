import React, { Component } from 'react'
import { get } from "utils/http"
import "./Minote.scss"
import Swiper from "components/swiper/Swiper"
export default class Minote extends Component {
    constructor() {
        super();
        this.state = {
            Swiperlist: [],
            productlist: []
        }
    }
    render() {
        return (
            <div className="noteSwipper">
                <Swiper list={this.state.Swiperlist}></Swiper>
                <div className="noteMain">
                    <img className="noteMainThem" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f517411edd5fc5edeb14c231ee17e3.jpg?thumb=1&w=720&h=86" alt="" />
                    <div className="noteProduct">
                        {
                            this.state.productlist.map((item) => {
                                return (
                                    <li key={item.product_id}>
                                        <img src={item.img_url} alt="" />
                                        <p className="noteName">{item.product_name}</p>
                                        <p className="noteBrief">{item.product_brief}</p>
                                        <p className="notePrice">
                                            <span className="noteNewprice">￥{item.product_price}</span>
                                            <span className="noteOrgprice">￥{item.product_org_price}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    async getDailylist() {
        let result = await get('/api/daily');
        this.setState({
            Swiperlist: result.data.note[0].swiper,
            productlist: result.data.note[0].product
        })
    }
    componentDidMount() {
        this.getDailylist();
    }
}
