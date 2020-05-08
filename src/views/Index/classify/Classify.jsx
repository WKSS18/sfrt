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
                            <ul className="classifyRf">
                            
                                {
                                    this.state.slideRflist.map((item) => {
                                        return (
                                            <>
                                                <img id={'8888'+Math.floor(Math.random()*20000000)} key={'8888'+Math.floor(Math.random()*20000000)} className="classifyTit" style={{display:item.category_list[0].body.items ? 'block' :'none'}}  src={item.category_list[0].body.items ? item.category_list[0].body.items[0].img_url : ''} />
                                                <li key={item.category_id}>
                                                    {
                                                        item.category_list.map((item)=>{
                                                            return (
                                                               <ul id={'55'+Math.floor(Math.random()*10000)} key={'55'+Math.floor(Math.random()*10000)}>
                                                                    {/* <p id={Math.floor(Math.random()*1000000)} key={Math.floor(Math.random()*1000000)}>{item.body.category_name ? item.body.category_name : ''}</p>
                                                                    <li id={Math.floor(Math.random()*10000222)} key={Math.floor(Math.random()*10000222)}>
                                                                       
                                                                    </li> */}
                                                               </ul>
                                                                
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </>

                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </ClassifyContainer>
        )
    }


    async getDatalist() {
        let result = await get('/api/classify');
        console.log(result);
        let slideLflist = [];
        for (var i = 0; i < result.data.data.length; i++) {
            slideLflist.push({ category_name: result.data.data[i].category_name, category_id: result.data.data[i].category_id });
        }
        this.setState({
            slideLflist: slideLflist,
            slideRflist: result.data.data
        })
        console.log(result.data.data[0].category_list[0].body.items[0].img_url)
    }
    componentDidMount() {
        this.getDatalist();
    }
}


export default withRouter(Classify)