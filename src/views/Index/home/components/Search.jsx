import React, { Component } from 'react'
export default class Search extends Component {
    render() {
        return (

            <div className="miHsearch">
                <div className="miLogo"></div>
                <div className="miSearch">
                    <i></i>
                    <input type="text" placeholder="搜索商品名称" />
                </div>
                <div className="miLogin"></div>
            </div>
        )
    }
}
