import React, { Component } from 'react'
import { get } from "utils/http"
import "./Mirim.scss"
export default class Mirim extends Component {
    constructor() {
        super();
        this.state = {
            headItem: {},
            classifylist: [],
            productlist: []
        }
    }
    render() {
        return (
            <div className="Mitrim">
                <div className="miTrimHead">
                    <img src={this.state.headItem.img_url} alt="" />
                </div>
                <div className="miTrimMain">
                    <div className="miTrimNav">
                        {
                            this.state.classifylist.map((item,index) => {
                                return (
                                    <li key={'tef'+index}>
                                        <img src={item.img_url} alt="1" />
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div className="miTrimProduct">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c78be8d4a3365a212f1c39855ff3915c.jpg?thumb=1&w=720&h=93" alt="" />
                        {
                            this.state.productlist.map((item) => {
                                return (
                                    <li key={'def'+Math.random()*19524582152}>
                                        <img src={item.img_url} alt="" />
                                        <p className="trimName">{item.product_name}</p>
                                        <p className="trimBrief">{item.product_brief}</p>
                                        <p className="trimPrice">
                                            <span className="trimNewprice">￥{item.product_price}</span>
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
            headItem: result.data.live[0].headItem,
            classifylist: result.data.live[0].classify,
            productlist: result.data.live[0].product,
        })
    }
    componentDidMount() {
        this.getDailylist();
    }
}
