import React, { Component } from 'react'
import { get, post } from "utils/http"
import { SearchContainer } from "./Search.styled"
import { withRouter } from "react-router-dom"
import throttle from 'lodash/throttle';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            keywords: "",
            ids: 0,
            datalist: [],
            searchlist: [],
            titImg: "",
            discoverList: [],
            showDiscover: true,
            showSearch:false
        }
        this.handleSearch = throttle(this.handleSearch, 200);
    }
    changeClick = (event) => {
        this.setState({
            keywords: event.target.value
        })
        this.handleSearch();
    }

    handleSearch = async () => {
        let result = await post('/apis/search', {
            params: { keywords: this.state.keywords }
        });
        this.setState({
            datalist: result.data.list,
        })
    }
    clickHandler = () => {
        let searchList = this.state.datalist.filter((item) => {
            return item.title.indexOf(this.state.keywords) > 0;
        })
        this.setState({
            searchlist: searchList.slice(0, 8),
            showDiscover: false,
            showSearch:true
        })
        this.setState({})
        console.log(this.state.searchlist, searchList)
    }
    bakClick = () => {
        this.props.history.push('/index/Home/mihome')
    }
    render() {
        return (
            <SearchContainer>
                <div className="miSearch">
                    <div className="miSearHead">
                        <i className="searchBak" onClick={this.bakClick}></i>
                        <input placeholder="搜索商品名称" onChange={this.changeClick} type="text" />
                        <i className="searchBtn" onClick={this.clickHandler}></i>
                    </div>
                    <div className="miDiscover" style={{ display: this.state.showDiscover ? 'block' : 'none' }}>
                        <p className="titThem">搜索发现</p>
                        <p><img className="titImg" src={this.state.titImg} alt="" /></p>
                        <ul className="titList">
                            {
                                this.state.discoverList.map((item) => {
                                    return (
                                        <li key={'a' + item.id}>
                                            {item.desc}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <p className="msg">mockjs测试数据，单字搜索</p>
                    </div>
                </div>
                <ul className="searchList" style={{display:this.state.showSearch ? 'block' : 'none'}}>
                    {
                        this.state.searchlist.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>

            </SearchContainer>
        )
    }

    async getDiscover() {
        let result = await get('/api/search');
        console.log(result);
        this.setState({
            titImg: result.data.data.ad_list[0].body.items[0].img_url,
            discoverList: result.data.data.discover_list
        })
    }
    componentDidMount() {
        this.getDiscover();
    }
}
export default withRouter(Search)