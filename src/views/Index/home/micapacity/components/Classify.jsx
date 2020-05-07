import React, { Component } from 'react'

export default class Capacity extends Component {
    render() {
        return (
            <div className="classifyPro">
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <img src={item.img_url} alt=""/>
                      
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
