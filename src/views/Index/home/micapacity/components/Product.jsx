import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="MiProduct">
                {
                    this.props.list.map((item)=>{
                        return (
                            <li key={item.product_id}>
                                <img src={item.img_url} alt=""/>
                                <p className="productName">
                                    {item.product_name}
                                </p>
                                <p className="productBrief">
                        <span className="priceOrig">￥{item.product_price}</span><span  className="priceNew">￥{item.product_org_price}</span>
                                </p>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
