import React, { Component } from 'react'
import { get } from "utils/http"
import {withRouter} from "react-router-dom"
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            Navlist: [],
            showLine:false,
            NavliId:""
        }
    }
    NavClick = (event)=>{
      this.setState({
          NavliId:event.target.id
      })
      this.props.paths(event.target.getAttribute("paths"))
    }
    render() {
        return (
            <div className="miHNav">
                <div className="miNavLef">
                    <ul>
                        {
                            this.state.Navlist.map((item, index) => {
                                return (
                                    <li key={index} id={item.page_id} onClick={this.NavClick} paths={item.page_type} className={this.state.NavliId === `${item.page_id}` ? 'active' : ''} >
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <span></span>
            </div>
        )
    }

    async getNavlist() {
        let result = await get('/api/miNav');
        this.setState({
            Navlist: result.data.data.tabs
        })
    }
    componentDidMount() {
        this.getNavlist();
    }
}
export default withRouter(Nav);
