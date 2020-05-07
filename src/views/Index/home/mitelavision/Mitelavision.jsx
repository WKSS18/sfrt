import React, { Component } from 'react'
import { get } from "utils/http"
import "./Mitelavision.scss"
export default class Mitelavision extends Component {
    constructor() {
        super();
        this.state = {
            Mitelavision: [],
            headItem: {},
            headBottom: {}
        }
    }
    render() {
        return (
            <div className="mitelaVision">
                <div className="mivisionHead">
                    <img src={this.state.headItem.img_url} alt="" />
                </div>
                <div className="mivisionMain">
                    <img src={this.state.headBottom.img_url} alt="" />
                    {
                        this.state.Mitelavision.map((item) => {
                            return (
                                <li key={item.product_id}>
                                    <img src={item.img_url} alt="" />
                                    <p className="telavisionName">{item.product_name}</p>
                                    <p className="telavisionBrief">{item.product_brief}</p>
                                    <p className="telavisionPrice">
                                        <span className="telaNewprice">{item.product_price}</span>
                                        <span className="telaOrgprice">{item.product_org_price}</span>
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
        console.log(result)
        this.setState({
            headBottom: result.data.television[0].headBottom,
            headItem: result.data.television[0].headItem,
            Mitelavision: result.data.television[0].product
        })
    }
    componentDidMount() {
        this.getDailylist();
    }
}
