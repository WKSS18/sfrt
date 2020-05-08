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
            slideRflist: []
        }
    }

    clickBak = () => {
        this.props.history.push('/index/Home/mihome');
        // window.history.go(-1);
        window.history.go(0)
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
                                            <li key={index} href={item.category_id}>
                                                {item.category_name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="rightswiper">
                          
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