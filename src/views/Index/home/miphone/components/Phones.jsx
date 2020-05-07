import React, { Component } from 'react'
export default class Phones extends Component {
    render() {
        return (
            <div className="miphone">
                {
                    this.props.lists.map((item) => {
                        return (
                            <li key={item.product_id}>
                                <img src={item.img_url} alt="" />
                                <p><span className="phoneName">{item.product_name}</span><span className="phonePrice">￥{item.product_price}起</span></p>
                                <p><span className="phoneBrief">{item.product_brief}</span><span className="phoneBtn">{item.btn_txt}</span></p>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
