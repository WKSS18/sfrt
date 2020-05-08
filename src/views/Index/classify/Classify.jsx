import React, { Component } from 'react'
import { ClassifyContainer } from "./Classify.styled"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"
import './Classify.scss'
class Classify extends Component {
    constructor() {
        super();
        this.state = {
            slideLflist: [],
            slideRflist: [],
            pro:""
        }
    }

    clickBak = () => {
        this.props.history.push('/index/Home/mihome');
        // window.history.go(-1);
        window.history.go(0)
    }

    tzClick = () => {
       
    }
    handClick  =(event)=>{
        if(this.state.pro){
            this.state.pro.style.color = 'black';
        }
        this.state.pro = event.target;
        this.state.pro.style.color = '#fb7d34';

    }
    render() {
        return (
            <ClassifyContainer>
                <div className="miClassify">
                    <div className="classifyHead">
                        <i className="classifyBak" onClick={this.clickBak}></i>
                        <span>分类</span>
                        <i className="classifySearch"></i>
                    </div>
                    <div className="classifyMain">
                        <div className="leftswiper">
                            <ul className="classifyLf">
                                {
                                    this.state.slideLflist.map((item, index) => {
                                        return (
                                            <li key={index} onClick={this.handClick}>
                                                <a href={'#' + item.category_id} onClick={this.tzClick}>
                                                    {item.category_name}
                                                </a>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="rightswiper">
                            <div className="rightUls">
                                {
                                    this.state.slideRflist.map((item) => {
                                        return (
                                            <ul id={item.category_id} key={'a1252' + Math.floor(Math.random() * 10000)}>
                                                {
                                                    item.category_list.map((item) => {
                                                        return (
                                                            <div key={'e1252' + Math.floor(Math.random() * 1000000)}>
                                                                <h3 className="miTheme" key={'c1252' + Math.floor(Math.random() * 10000)}>{item.body.category_name}</h3>
                                                                <ul className="miThUls" key={'d1252' + Math.floor(Math.random() * 10000)}>
                                                                    {
                                                                        item.body.items ? (item.body.items.length > 1 ? item.body.items.map((item) => {
                                                                            return (
                                                                                <li className="miThlis" key={'f1252' + Math.floor(Math.random() * 10000000)}>
                                                                                    <img className="proImg" src={item.img_url} alt=""/>
                                                                                    <p className="proName">{item.product_name}</p>
                                                                                </li>
                                                                            )
                                                                        }) : item.body.items.map((item) => {
                                                                            return (
                                                                                // <img key={'g1252' + Math.floor(Math.random() * 10000000)} src={item.img_url} alt=""/>
                                                                                < a key={'g1252' + Math.floor(Math.random() * 10000000)} src={item.img_url} href="#"></a>
                                                                            )
                                                                        })) : ''
                                                                    }
                                                                </ul>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </ClassifyContainer>
        )
    }


    async getDatalist() {
        let result = await get('/api/classify');
        let slideLflist = [];
        for (var i = 0; i < result.data.data.length; i++) {
            slideLflist.push({ category_name: result.data.data[i].category_name, category_id: result.data.data[i].category_id });
        }
        console.log(result);
        this.setState({
            slideLflist: slideLflist,
            slideRflist: result.data.data
        })
    }
    componentDidMount() {
        this.getDatalist();
    }
}


export default withRouter(Classify)