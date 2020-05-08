import React, { Component } from 'react'
import connect from "views/Index/detail/redux/connect"
import { ShopContainer } from "./Shop.styled"
import { get } from "utils/http"
class Shop extends Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }
    }
    clickBak = () => {
        this.props.history.push('/index/Home/mihome')
    }
    render() {
        return (
            <ShopContainer>
                <div className="shopList">
                    <div className="shopHead">
                        <i className="shopBak" onClick={this.clickBak}></i>
                        <span>购物车</span>
                        <i className="shopSearch"></i>
                    </div>
                    <div className="shopList">
                        {
                            this.state.datalist.map((item) => {
                                return (
                                    <li key={item.product_id}>
                                        <div className="proImg">
                                            <img src={item.gallery_v3[5].img_url} alt="" />
                                        </div>
                                        <div className="proDetail">
                                            <p className="proTit">{item.title}</p>
                                            <p className="proPrice">售价：{item.price}元</p>
                                            <p className="proNum">数量：{item.num}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </ShopContainer>

        )
    }
    async componentDidMount() {
        let datalist = await get('/api/detailProduct');
        if (datalist.data.data) {
            let choicelist = JSON.parse(localStorage.getItem('goodsId'));
            var data = [];
            if (choicelist) {
                for (var i = 0; i < choicelist.length; i++) {
                    for (var j = 0; j < datalist.data.data.length; j++) {
                        if (datalist.data.data[j].product_id === choicelist[i]) {
                            for (var k = 0; k < this.props.datalist.length; k++) {
                                if (this.props.datalist[k].product_id === datalist.data.data[j].product_id) {
                                    localStorage.setItem('num',this.props.datalist[k].num);
                                    datalist.data.data[j].num = localStorage.getItem('num');
                                }
                            }
                            data.push(datalist.data.data[j]);
                        }
                    }
                }
            }
            this.setState({
                datalist: data
            })
        }
    }
}
export default connect(Shop)
