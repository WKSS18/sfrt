import React, { Component } from 'react'
import { get } from "utils/http"
import "./Mielectrical.scss"
export default class Mielectrical extends Component {
    constructor() {
        super();
        this.state = {
            classifylist: [],
            productlist: [],
            headItem: {},
            titleItem: {}
        }
    }
    render() {
        return (
            <div className="melecTrical">
                <div className="melecHead">
                    <img src={this.state.headItem.img_url} alt="" />
                </div>
                <div className="melecNav">
                    {
                        this.state.classifylist.map((item,index) => {
                            return (
                                <img key={index} src={item.img_url} alt="" />
                            )
                        })
                    }
                </div>
                <div className="meleProduct">
                    <img className="meleproTit" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d046500eed9316574bea4778ee297a98.jpg?thumb=1&w=720&h=138" alt="" />
                    {
                        this.state.productlist.map((item) => {
                            return (
                                <li key={item.product_id}>
                                    <img src={item.img_url} alt=""/>
                                    <p className="tricalTit">{item.product_name}</p>
                                    <p className="tricalBrief">{item.product_brief}</p>
                                    <p className="tricalPrice">
                                        <span className="tricalNewprice">￥{item.product_price}</span>
                                        <span className="tricalOldprice">￥{item.product_org_price}</span>
                                    </p>
                                    <p className="tricalBuy">
                                        {item.btn_txt}
                                    </p>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async getDailylist() {
        let result = await get('/api/daily');
        this.setState({
            headItem: result.data.appliance[0].headItem,
            classifylist: result.data.appliance[0].classify,
            titleItem: result.data.appliance[0].titleItem,
            productlist: result.data.appliance[0].product
        })
    }
    componentDidMount() {
        this.getDailylist();
    }
}
