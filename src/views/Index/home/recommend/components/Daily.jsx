import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Daily extends Component {
    handClick = (id)=>{
        this.props.history.push('/detail/miproduct/'+id)
    }
    render() {
        return (
            <ul className="Dailylis">
                {
                    this.props.lists.map((item, index) => {
                        return (
                                <li key={item.product_id} onClick={this.handClick.bind(this,item.product_id)}>
                                    <img src={item.img_url} alt="" />
                                    <p className="mititle" style={{display:index===0 ? "none" : "block"}}>{item.product_name}</p>
                                    <p className="mibrief" style={{display:index===0 ? "none" : "block"}}>{item.product_brief}</p>
                                    <p className="miprice" style={{display:index===0 ? "none" : "block"}}>{item.product_price}</p>
                                    <button className="mibuy" style={{display:index===0 ? "none" : "block"}}>立即购买</button>
                                </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default withRouter(Daily)
